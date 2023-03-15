import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit{

  @Input() object: any;
  @ViewChild('parrentContainer') host!: any;
  @ViewChild('input') input!: any;
  constructor(){

  }

  ngOnInit(){
  }
  deleteObject(){
    this.host.nativeElement.parentNode.parentNode.removeChild(this.host.nativeElement.parentNode);
  }
}
