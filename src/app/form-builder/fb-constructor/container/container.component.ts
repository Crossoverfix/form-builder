import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  @Input() container: any;

  constructor(){

  }

  ngOnInit(){

  }
  drop(event: CdkDragDrop<string[]>){
    console.log('test');
  }
}
