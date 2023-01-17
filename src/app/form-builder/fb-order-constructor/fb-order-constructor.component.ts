import {Component, Input, OnInit} from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';

@Component({
  selector: 'app-fb-order-constructor',
  templateUrl: './fb-order-constructor.component.html',
  styleUrls: ['./fb-order-constructor.component.scss']
})
export class FbOrderConstructorComponent implements OnInit{
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
