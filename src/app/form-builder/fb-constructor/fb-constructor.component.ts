import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fb-constructor',
  templateUrl: './fb-constructor.component.html',
  styleUrls: ['./fb-constructor.component.scss']
})
export class FbConstructorComponent implements OnInit{

  @Input() items: any;
  @Input() baseConstructorArr: any | null;
  public itemsList: any | never = [];

  constructor(){

  }

  ngOnInit(){

  }



}
