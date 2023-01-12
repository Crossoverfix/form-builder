import {Component, OnInit} from '@angular/core';

export interface IGroupItem {
  name: string
  icon: string
  template: string
  container: boolean
}
export interface IConstructorItems {
  group: string
  groupItem: IGroupItem
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit{

  public draggedItem: {} | null = null;
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
  ngOnInit(){

  }
  currItem(currItem: any){
    this.draggedItem = currItem;
    console.log(this.draggedItem);
  }
  currArea(currArea: any){
    if (this.draggedItem){

    }
    console.log(currArea);
  }
  endDrag(){
    this.draggedItem = null;
    console.log("end drag on parrent" + this.draggedItem);
  }

}
