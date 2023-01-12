import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'app-fb-constructor',
  templateUrl: './fb-constructor.component.html',
  styleUrls: ['./fb-constructor.component.scss']
})
export class FbConstructorComponent implements OnInit{

  @Output() dropEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() items: any;
  @Input() draggedList: any | null;
  public itemsList: any | never = [];
  @ViewChild('parrent') parrentContainer: any;


  ngOnInit(){

  }

  drop(event: any) {
    let target = {
      targetElement: event.target,
      parentElement: event.path[1],
      frameX: event.layerX,
      frameY: event.layerY,
      otherFrameX: event.offsetX,
      otherFrameY: event.offsetY,
      // event: event
    }
    this.dropEvent.emit(target);
    this.addItem(this.draggedList);
    console.log(this.parrentContainer);
    if(target.targetElement.id == this.parrentContainer.nativeElement.id){
      console.log("yes " + this.parrentContainer)
    } else {
      console.log("no " + this.parrentContainer)
    }
  }
  addItem(item: any | never){
    this.itemsList.push(item);
  }
}
