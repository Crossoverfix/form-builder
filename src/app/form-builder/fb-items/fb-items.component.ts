import {Component, Input, OnInit} from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-fb-items',
  templateUrl: './fb-items.component.html',
  styleUrls: ['./fb-items.component.scss']
})
export class FbItemsComponent implements OnInit{

  public draggedItem = [];
  @Input() items: any;

  ngOnInit(){

  }

  dragStart(item: any) {
    this.draggedItem = item;
    console.log(this.draggedItem);
  }
}
