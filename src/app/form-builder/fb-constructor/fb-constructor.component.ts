import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray,} from "@angular/cdk/drag-drop";

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
    // this.baseConstructorArr = this.items;
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.baseConstructorArr, event.previousIndex, event.currentIndex);
  }

}
