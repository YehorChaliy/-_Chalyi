import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<div>
                    <input [(ngModel)]="newName" (keyup.enter)="addName()" placeholder="Введіть імена">
                    <button (click)="addName()">Додати</button>
                </div>
                <ul>
                    <li *ngFor="let name of names">{{ name }}</li>
                </ul>`
})
export class NameListComponent {
    newName = '';
    names: string[] = [];
  
    addName() {
      const splitNames = this.newName.split(',').map(name => name.trim());
  
      for (const name of splitNames) {
        if (name !== '') {
          this.names.push(name);
        }
      }
  
      this.newName = '';
    }
  }
