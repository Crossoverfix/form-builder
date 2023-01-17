import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderListModule} from "primeng/orderlist";
import { DragDropModule } from 'primeng/dragdrop';


import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FbItemsComponent } from './form-builder/fb-items/fb-items.component';
import { FbConstructorComponent } from './form-builder/fb-constructor/fb-constructor.component';
import { FbSettingsComponent } from './form-builder/fb-settings/fb-settings.component';
import {FormsModule} from "@angular/forms";
import { FbOrderItemComponent } from './form-builder/fb-order-item/fb-order-item.component';
import { FbOrderConstructorComponent } from './form-builder/fb-order-constructor/fb-order-constructor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FbItemsComponent,
    FbConstructorComponent,
    FbSettingsComponent,
    FbOrderItemComponent,
    FbOrderConstructorComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
