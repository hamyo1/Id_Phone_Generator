import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { AddressService } from '../../shared/services/address.service'


@Component({
  selector: 'app-address-generator',
  templateUrl: './address-generator.component.html',
  styleUrls: ['./address-generator.component.css']
})
export class AddressGeneratorComponent implements OnInit {
  city='';
  street='';

  constructor(private addressService:AddressService,private common:CommonService) { 
  }

  ngOnInit(): void {
    this.myGneratedAddress();
  }

  public myGneratedAddress()
  {
    var randInt=this.common.getRandomInt(0,127);
    this.addressService.getFireBaseDataForGoodAdress(randInt).subscribe(res => {
      randInt=this.common.getRandomInt(res[1],res[0]);
      this.addressService.getAddress(randInt).subscribe(data=>{
        this.city=data.result.records[0].שם_ישוב;
        this.street=data.result.records[0].שם_רחוב});
    } );

  }

}

