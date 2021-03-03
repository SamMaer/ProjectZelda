import { Injectable } from '@angular/core';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class ZeldaService {
  public dogs: Dog[] = [
    new Dog('België', 6),
    new Dog("Nederland", 13), 
    new Dog("Spanje", 1, "../../assets/testDog1.jpg"),
    new Dog("Jan", 1.5, "test")
      ];
  constructor() { }

  public getDogs() {
    return this.dogs;
  }

  public addDog(d: Dog){
    this.dogs.push(d);
  }
}
