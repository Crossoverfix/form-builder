import {Component, OnInit} from '@angular/core';
import {FormBuilderComponent} from "../form-builder.component";

@Component({
  selector: 'app-fb-settings',
  templateUrl: './fb-settings.component.html',
  styleUrls: ['./fb-settings.component.scss']
})
export class FbSettingsComponent implements OnInit{

  private formBuilderComponent: FormBuilderComponent;
  public title: string = 'Тестовое поле 1';
  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit() {
  }

}
