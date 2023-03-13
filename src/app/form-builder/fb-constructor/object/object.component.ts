import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit{

  @Input() object: any;

  constructor(){

  }

  ngOnInit(){
  }
}
