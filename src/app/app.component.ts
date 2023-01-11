import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder';
  public draggedItem = new Object();

  constructor() { }

  ngOnInit() {
  }
  dragStart(item: any) {
    this.draggedItem = item;
    debugger;
  }
}
