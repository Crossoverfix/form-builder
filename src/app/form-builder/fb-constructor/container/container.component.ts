import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormBuilderComponent} from "../../form-builder.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  @ViewChild('inerrContainer', {static: true}) innerContainer!: CdkDropList;
  @ViewChild('parrentContainer') host!: any;
  @Input() container: any;
  @Input() content: any = false;
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
    if (this.content && this.content != undefined){
      this.currArr = this.content;
    } else {
      this.content = false;
    }
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
    }
  }
  deleteContainer(){
    this.host.nativeElement.parentNode.parentNode.removeChild(this.host.nativeElement.parentNode);
  }
}
