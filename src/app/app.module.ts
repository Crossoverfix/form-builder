import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FbItemsComponent } from './form-builder/fb-items/fb-items.component';
import { FbConstructorComponent } from './form-builder/fb-constructor/fb-constructor.component';
import { FbSettingsComponent } from './form-builder/fb-settings/fb-settings.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
