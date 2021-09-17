import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {

  @Input() title: string | undefined;
  e1: any;
  e2: any;
  operacija: string = 'saberi';
  operacije : String[] = ['saberi', 'oduzmi','mnozi','deli'];
  rezultat: any; 

  constructor() { }

  ngOnInit(): void {

    this.e1= 0;
    this.e2= 0;

  }

  saberi(){
    this.rezultat = this.e1 + this.e2;
  }

  oduzmi(){
    this.rezultat = this.e1 - this.e2;
  }

  mnozi(){
    this.rezultat = this.e1 * this.e2;
  }

  deli(){
    this.rezultat = this.e1 / this.e2;
  }

}
