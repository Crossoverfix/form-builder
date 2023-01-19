import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit{

  @ContentChild('parrent') parrentContainer: ElementRef | undefined;

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
  public baseConstructorArr = [];

  constructor(){
    setTimeout(() => {
      console.log(this.parrentContainer);
    }, 1000);
  }

  ngOnInit(){

  }


}
