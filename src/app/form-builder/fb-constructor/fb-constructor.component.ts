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
  public formArr: any;

  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit(){
    this.formBuilderComponent.draggEvent.subscribe((obj) => {
      this.listenDraggEvent(obj);
    })
  }

  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.baseConstructorArr);
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
  saveForm(){
    this.formArr = this.sortArr(Array.from(this.container.nativeElement.children));
    let jsonObj = JSON.stringify(this.formArr);
    let objFormJson = JSON.parse(jsonObj);
    console.log("Conver to JSON", jsonObj);
    console.log("Convert to object from JSON", objFormJson);
    let fileJson = new Blob([jsonObj], {type : 'application/json'});
    var url = window.URL.createObjectURL(fileJson);
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('href',url);
    link.setAttribute('download','download');
    link.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 1000);
  }
  sortArr(colection: any){
    let arr: any = Array.from(colection);
    let result: any = [];
    for(let i = 0; i < arr.length; i++){
      for (let ii = 0; ii < arr[i].children.length; ii++){
        if(arr[i].children[ii].classList.contains('inerrContainer')){
          for(let iii = 0; iii < arr[i].children[ii].children.length; iii++){
            if (arr[i].children[ii].children[iii].classList.contains('cdk-drop-list')){
              // this.sortArr(arr[i].children[ii].children[iii].children);
              if(arr[i].children[ii].children[iii].children.length){
                result.push({"container": false, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'container', "content": this.sortArr(arr[i].children[ii].children[iii].children)})
              } else {
                result.push({"container": false, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'container'})
              }
            }
          }
        } else if (arr[i].children[ii].classList.contains('inerrItem')) {
          result.push({"container": false, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'item' });
        }
      }
    }
    return result;
  }
}
