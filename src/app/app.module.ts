import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FbItemsComponent } from './form-builder/fb-items/fb-items.component';
import { FbConstructorComponent } from './form-builder/fb-constructor/fb-constructor.component';
import { FbSettingsComponent } from './form-builder/fb-settings/fb-settings.component';
import {FormsModule} from "@angular/forms";
import { ObjectComponent } from './form-builder/fb-constructor/object/object.component';
import { ContainerComponent } from './form-builder/fb-constructor/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FbItemsComponent,
    FbConstructorComponent,
    FbSettingsComponent,
    ObjectComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
