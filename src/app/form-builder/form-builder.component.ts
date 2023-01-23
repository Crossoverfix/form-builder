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
        {name: "Горизонтальный", icon: "pi-arrows-h", template: "horizontal", container: true,},
        {name: "Вертикальный", icon: "pi-arrows-v", template: "vertical", container: true,},
        {name: "Пробел", icon: "pi-stop", template: "spaces", container: false,}
      ]},
    {group: "Поля", groupItem: [
        {name: "Текст", icon: "", template: "text", container: false,},
        {name: "Кнопка", icon: "", template: "button", container: false,}
      ]}
  ];
  public draggEvent = new Subject();

  constructor(){

  }

  ngOnInit(){

  }
  draggedEvent(event: any){
    this.draggEvent.next(event);
  }

}
