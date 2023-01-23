import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDrag } from "@angular/cdk/drag-drop";
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
  public baseConstructorArr: any = [];
  private formBuilderComponent: FormBuilderComponent;

  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit(){
    this.formBuilderComponent.draggEvent.subscribe((obj) => {
      this.listenDraggEvent(obj);
    })
  }

  drop(event: CdkDragDrop<string[]>){
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // this.baseConstructorArr.push(event.previousContainer.data[event.previousIndex]);
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex,
      // );
    }
  }
  blockSdkDragg(item: CdkDrag<number>) {;
    return false;
  }
  listenDraggEvent(obj: any){
    if(obj.event.target.id == this.container.nativeElement.id){
      this.baseConstructorArr.push(obj.previousContainer.data[obj.previousIndex]);
    } else {
    }
  }
}
