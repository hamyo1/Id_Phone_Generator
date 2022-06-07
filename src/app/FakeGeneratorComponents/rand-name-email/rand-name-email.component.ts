import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import {  NamesDbService } from 'src/app/shared/services/namesDb.service';

@Component({
  selector: 'app-rand-name-email',
  templateUrl: './rand-name-email.component.html',
  styleUrls: ['./rand-name-email.component.css']
})
export class RandNameEmailComponent implements OnInit {
firstName="";
lastName="";
email="";
fullName=""


  constructor(private namesDbService:NamesDbService,private common:CommonService ) { }

  ngOnInit(): void {

    this.myGneratedNames();
  }

  public myGneratedNames()
  {
    debugger;
    var randInt=this.common.getRandomInt(0,4945);
    this.namesDbService.getFirstNameFromFireBaseDB(randInt).subscribe(res => {
      this.firstName=res[0];
      var randInt=this.common.getRandomInt(0,4972);
      this.namesDbService.getLastNameFromFireBaseDB(randInt).subscribe(res => {
        this.lastName=res[0];
        if(this.firstName!="")
        {
          this.fullName=`${this.firstName} ${this.lastName}`;
          this.email=`${this.firstName}${this.lastName}@gmail.com`
        }

      });
  
    });



  }
}
