import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';

@Component({
  selector: 'app-fb-order-item',
  templateUrl: './fb-order-item.component.html',
  styleUrls: ['./fb-order-item.component.scss']
})
export class FbOrderItemComponent implements OnInit{
  @Input() items: any;
  public currItem: any;

  ngOnInit(){
    this.currItem = [];
    this.massiveConvert(this.items);
  }
  massiveConvert(arr:any){
    for(let i = 0; i < arr.length; i++){
      for(let ii = 0; ii < arr[i].groupItem.length; ii++){
        this.currItem.push(arr[i].groupItem[ii])
      }
    }
  }

}
