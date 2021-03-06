import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { ZeldaService } from '../zelda.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  public dogs: Dog[] = [];

  constructor(private zs: ZeldaService) { 
    this.dogs = zs.getDogs();
  }
  ngOnInit(): void {
  }
}
