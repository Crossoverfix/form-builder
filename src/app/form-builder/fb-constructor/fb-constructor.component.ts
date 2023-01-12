import {Component, Input, OnInit} from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'app-fb-constructor',
  templateUrl: './fb-constructor.component.html',
  styleUrls: ['./fb-constructor.component.scss']
})
export class FbConstructorComponent implements OnInit{

  @Input() items: any;

  ngOnInit(){

  }

  drop(event: any) {
    console.log(event);
  }
}
