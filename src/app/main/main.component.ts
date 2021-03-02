import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { ZeldaServiceService } from '../zelda-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public dogs: Dog[] = [];
  
  constructor(private ds: ZeldaServiceService) { 
    this.dogs = ds.getDogs()
  }

  ngOnInit(): void {
  }


}
