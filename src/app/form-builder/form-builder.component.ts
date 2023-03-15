import {Component, ContentChild, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit{


  public items = [
    {group: "Контейнеры", groupItem: [
        {name: "Горизонтальный", icon: "icon-horizontal", template: "horizontal", container: true,},
        {name: "Вертикальный", icon: "icon-vertical", template: "vertical", container: true,},
        {name: "Пробел", icon: "icon-spaces", template: "spaces", container: false,}
      ]}
  ];
  public sendedId = 0;
  public listOfItems: any;
  public draggEvent = new Subject();
  public checkIdEvent = new Subject();

  constructor(){

  }

  ngOnInit(){

  }
  sendId(event: any){
    this.sendedId = event;
  }
  sendListOfItems(event: any){
    this.listOfItems = event;
  }
  draggedEvent(event: any){
    this.draggEvent.next(event);
  }
  initCheckId(){
    this.checkIdEvent.next(true);
  }

}
