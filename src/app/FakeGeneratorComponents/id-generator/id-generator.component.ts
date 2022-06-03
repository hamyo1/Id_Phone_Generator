import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css']
})
export class IdGeneratorComponent implements OnInit {

  IdGenerate: string = '0';
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.generateId();
  }


  checkId(IdValue:string)
  {
    var checkStatus=false;
    checkStatus = this.checkIid(IdValue);
    if(checkStatus==false)
    {
      Swal.fire({
        position: 'center'        ,
        icon: 'error',
        title: 'bad id number',
        showConfirmButton: false,
        timer: 1500
      });

    }

    if(checkStatus==true)
    {
      Swal.fire({
        position: 'center'        ,
        icon: 'success',
        title: 'good id number',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  generateId() {
    var checkStatus=false;
    var iid = "", num, counter = 0;

    while(!checkStatus){
      iid= this.getIid();
      checkStatus = this.checkIid(iid);
    }



    this.IdGenerate = iid;
  }



  getInc(num:number, i:number) {
    var inc = Number(num) * ((i % 2) + 1);
    return (inc > 9) ? inc -= 9 : inc;
  }
  
  getIid() {
    var iid="", num, counter=0;
    for(var i=0;i<8;i++) {
        num=this.common.getRandomInt((i<2)?2:0,(i<2)?3:9);
        iid+=num.toString();
        counter+=this.getInc(num,i);
    }
    return iid+(10-(counter%10)).toString();
  }
  
  checkIid(s:string) {
    var sID = String(s);
    if ((sID.length != 9) || (isNaN(Number(sID)))) return false;
    var counter = 0, incNum;
    for (var i = 0; i < 9; i++) {
        incNum = Number(sID.charAt(i));
        incNum *= (i % 2) + 1;
        if (incNum > 9) incNum -= 9;
        counter += incNum;
    }
    return (counter % 10 === 0);
  }
}


