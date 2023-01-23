import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormBuilderComponent} from "../../form-builder.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  @ViewChild('inerrContainer', {static: true}) innerContainer!: CdkDropList;
  @Input() container: any;
  public currArr: any = [];
  @Input() orentation: any;
  private formBuilderComponent: FormBuilderComponent;

  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit(){
    this.formBuilderComponent.draggEvent.subscribe((obj) => {
      this.listenDraggEvent(obj);
    })
    console.log("this container is", this.orentation);
  }

  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  listenDraggEvent(obj: any){
    if(obj.event.target.id == this.innerContainer.id){
      this.currArr.push(obj.previousContainer.data[obj.previousIndex]);
    } else {
      console.log('no');
    }
  }
}
