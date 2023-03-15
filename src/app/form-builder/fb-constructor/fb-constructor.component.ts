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
  @Input() catchId: any;
  public baseConstructorArr: any = [];
  private formBuilderComponent: FormBuilderComponent;
  public formArr: any = {};
  public dictId: string = '';
  public listId:any = [];

  constructor(formBuilderComponent: FormBuilderComponent,){
    this.formBuilderComponent = formBuilderComponent;
  }
  ngOnInit(){
    this.formBuilderComponent.draggEvent.subscribe((obj) => {
      this.listenDraggEvent(obj);
    })
    this.formBuilderComponent.checkIdEvent.subscribe(() => {
      this.checkDifferences();
    })
  }
  selectItem(event: any){
    let selected = document.getElementsByClassName('select');
    for (let i = 0; i < selected.length;i++){
      selected[i].classList.remove('select');
    }
    if (event.target.classList.contains('cdk-drag')){
      event.target.classList.add('select');
    } else {
      event.target.closest(".cdk-drag").classList.add('select');
    }
  }
  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
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
    this.formArr.id = 0;
    this.formArr.id = this.catchId;
    this.formArr.markUp = this.sortArr(Array.from(this.container.nativeElement.children));
    let jsonObj = JSON.stringify(this.formArr, null, 1);
    let objFormJson = JSON.parse(jsonObj);
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
  sortArr(collection: any){
    let arr: any = Array.from(collection);
    let result: any = [];
    for(let i = 0; i < arr.length; i++){
      for (let ii = 0; ii < arr[i].children.length; ii++){
        if(arr[i].children[ii].classList.contains('inerrContainer')){
          for(let iii = 0; iii < arr[i].children[ii].children.length; iii++){
            if (arr[i].children[ii].children[iii].classList.contains('cdk-drop-list')){
              // this.sortArr(arr[i].children[ii].children[iii].children);
              if(arr[i].children[ii].children[iii].children.length){
                result.push({"container": true, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'container',"ID":arr[i].children[ii].dataset.id, "content": this.sortArr(arr[i].children[ii].children[iii].children)})
              } else {
                result.push({"container": false, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'container',"ID":arr[i].children[ii].dataset.id})
              }
            }
          }
        } else if (arr[i].children[ii].classList.contains('inerrItem')) {
          result.push({"container": false, "icon": arr[i].children[ii].dataset.icon, "name":arr[i].children[ii].dataset.name, "template":arr[i].children[ii].dataset.template, "type":'item',"ID":arr[i].children[ii].dataset.id });
        }
      }
    }
    return result;
  }
  loadConfig(event: any){
    let file = new Subject<any>;
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = function () {
      file.next(JSON.parse(reader.result as string));
    }
    file.subscribe((jsonFile) => {
       this.baseConstructorArr = jsonFile.markUp;
       this.dictId = jsonFile.id;
       for (let i = 0; i < this.baseConstructorArr.length; i++){
        if (this.baseConstructorArr[i].content){
        } else {
          this.baseConstructorArr[i].content = false;
        }
      }
       this.checkDifferences();
    })
  }
  checkDifferences(){
    let collection = this.formBuilderComponent.listOfItems;
    this.listId = [];
    for (let i = 0; i < collection.length;i++ ){
      for (let ii = 0; ii < collection[i].groupItem.length;ii++){
        if (collection[i].groupItem[ii].ID){
          this.listId.push(collection[i].groupItem[ii].ID);
        } else {
        }
      }
    }
    setTimeout(() => {
      this.markAllDifferent(this.listId);
    }, 500)

  }
  markAllDifferent(collection: any){
    let ar = document.querySelectorAll(".inerrItem");
    let arr: any = Array.from(ar);
    for(let i = 0; i < arr.length; i++){
      if (arr[i].dataset.id){
        for (let ci = 0; ci < collection.length; ci++){
          arr[i].classList.add('mismatch');
          if (arr[i].dataset.id == collection[ci]){
            arr[i].classList.remove('mismatch');
            break;
          }
        }
      }
    }
  }
}
