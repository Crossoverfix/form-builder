import {Component, OnInit} from '@angular/core';

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
  ngOnInit(){

  }

}
