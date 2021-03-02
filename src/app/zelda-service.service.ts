import { Injectable } from '@angular/core';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class ZeldaServiceService {
  private dogs: Dog[] = [
    new Dog('België', 6),
    new Dog("Nederland", 13), 
    new Dog("Spanje", 1, "testDog1")
      ];
  constructor() { }

  public getDogs():Dog[] {
    return this.dogs;
  }

  public addDog(d: Dog){
    this.dogs.push(d);
  }
}
