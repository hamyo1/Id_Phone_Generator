import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-car-id-genrator',
  templateUrl: './car-id-genrator.component.html',
  styleUrls: ['./car-id-genrator.component.css']
})
export class CarIdGenratorComponent implements OnInit {

  constructor(private common:CommonService) { }
  
  CarIdGenerate='';
  ngOnInit(): void {
    this.generateCarId();
  }
  generateCarId() {
    this.CarIdGenerate = this.common.getRandomInt(1000000, 99999999).toString();
  }
}
