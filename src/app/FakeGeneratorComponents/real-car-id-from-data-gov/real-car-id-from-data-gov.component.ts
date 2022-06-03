import { Component, OnInit } from '@angular/core';
import { ICarData } from 'src/app/shared/models/carDataModeFinalObj.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { DataGocCarIdService } from '../../shared/services/dataGovCarId.service';

@Component({
  selector: 'app-real-car-id-from-data-gov',
  templateUrl: './real-car-id-from-data-gov.component.html',
  styleUrls: ['./real-car-id-from-data-gov.component.css']
})
export class RealCarIdFromDataGovComponent implements OnInit {

  carDataObj:ICarData={
    vin:'',
    carId: '',
    tozeret_nm: '',
    tozeret_cd: ''
  };

  constructor(private dataGocCarIdService:DataGocCarIdService ,private common:CommonService) { 
  }

  ngOnInit(): void {
    this.generateCarIdFromDataGov("");
  }
  

  public generateCarIdFromDataGov(carManufacture:string)
  {
    var randomInt=this.common.getRandomInt(0,977);

    if(carManufacture=='')
    {
      this.dataGocCarIdService.getCarIdFromDataGov('',randomInt,'').subscribe(data=>{
        this.carDataObj.vin=data.result.records[0].misgeret;
        this.carDataObj.carId=data.result.records[0].mispar_rechev;
        this.carDataObj.tozeret_nm=data.result.records[0].tozeret_nm;
        this.carDataObj.tozeret_cd=data.result.records[0].tozeret_cd;
      });

    }
    else
    {
      var carManufactureDataArray=carManufacture.split(',');
      randomInt=this.common.getRandomInt(0,+carManufactureDataArray[2]);
      this.dataGocCarIdService.getFireBaseData(randomInt,carManufactureDataArray[1]).subscribe(result => {
        this.dataGocCarIdService.getCarIdFromDataGov(result[1],randomInt,carManufactureDataArray[0]).subscribe(data=>{
        randomInt=this.common.getRandomInt(0,data.result.records.length-1);
        this.carDataObj.vin=data.result.records[randomInt].misgeret;
        this.carDataObj.carId=data.result.records[randomInt].mispar_rechev;
        this.carDataObj.tozeret_nm=data.result.records[randomInt].tozeret_nm;
        this.carDataObj.tozeret_cd=data.result.records[randomInt].tozeret_cd;
      });
    });

  }

}
}