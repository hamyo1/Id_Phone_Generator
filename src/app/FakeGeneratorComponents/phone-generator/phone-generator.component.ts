import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phone-generator',
  templateUrl: './phone-generator.component.html',
  styleUrls: ['./phone-generator.component.css']
})
export class PhoneGeneratorComponent implements OnInit {
  phoneGenerate='';
  regexExp:RegExp= new RegExp('^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$')    

  constructor(private common:CommonService) { }
  
  
  generatePhone()
  {
    var phoneNumber = "";
    while(!this.regexExp.test(phoneNumber)){
      phoneNumber= this.getRandPhoneNumber();
    }
    this.phoneGenerate = phoneNumber;
  }

  checkPhone(phoneGenerateInput:string)
  {
    var test=this.regexExp.test(phoneGenerateInput);
    if(test)
    {
      Swal.fire({
        position: 'center'        ,
        icon: 'success',
        title: 'good phone number',
        showConfirmButton: false,
        timer: 1500
      });
    }
    else
    {
      Swal.fire({
        position: 'center'        ,
        icon: 'error',
        title: 'bad phone number',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  getRandPhoneNumber() {
    var phoneNumber="05", num;
    var regexExpTherdNum=new RegExp('^[0|2|3|4|5|9]$');
    var regexExpAfterTherdNum=new RegExp('^[0-9]$');
  
    while(phoneNumber.length<10) {
        num=this.common.getRandomInt(0,9);
        if(phoneNumber.length>2 && regexExpAfterTherdNum.test(num.toString()))
        {
          phoneNumber+=num.toString();
        }
        if(phoneNumber.length==2 &&regexExpTherdNum.test(num.toString()))
        {
          phoneNumber+=num.toString();
        }
    }
    return phoneNumber;
  }

  ngOnInit(): void {
    this.generatePhone();
  }

}



