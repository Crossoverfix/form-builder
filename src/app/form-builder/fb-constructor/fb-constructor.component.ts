import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from "@angular/cdk/drag-drop";
import { FormBuilderComponent } from "../form-builder.component"
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-fb-constructor',
  templateUrl: './fb-constructor.component.html',
  styleUrls: ['./fb-constructor.component.scss']
})
export class FbConstructorComponent implements OnInit{

  @ViewChild('parrent', {static: true}) container!: ElementRef;
  @Input() items: any;
  @Input() baseConstructorArr: any | null;
  public itemsList: any | never = [];
  private formBuilderComponent: FormBuilderComponent;
  public obj: any;

  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit(){
    // console.log(this.container);
    // this.baseConstructorArr = this.items;
    this.formBuilderComponent.draggEvent.subscribe((obj) => {
      this.listenDraggEvent(obj);
    })
  }

  listenDraggEvent(obj: any){
    if(obj.target.id == this.container.nativeElement.id){
      console.log(obj);
      // this.baseConstructorArr.push(obj.item);
      copyArrayItem(
        obj.event.previousContainer.data,
        this.baseConstructorArr,
        obj.event.previousIndex,
        obj.event.currentIndex,
      );
      // console.log(this.itemsList);
      // console.log(this.baseConstructorArr);
    } else {
      // console.log('outside');
    }
    // console.log(obj);
  }
  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.baseConstructorArr, event.previousIndex, event.currentIndex);
  }

}
