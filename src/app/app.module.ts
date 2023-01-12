import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from 'primeng/dragdrop';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FbItemsComponent } from './form-builder/fb-items/fb-items.component';
import { FbConstructorComponent } from './form-builder/fb-constructor/fb-constructor.component';
import { FbSettingsComponent } from './form-builder/fb-settings/fb-settings.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FbItemsComponent,
    FbConstructorComponent,
    FbSettingsComponent,
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
