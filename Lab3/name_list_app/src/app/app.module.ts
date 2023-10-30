import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NameListComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ NameListComponent ],
    bootstrap:    [ NameListComponent ]
})
export class AppModule { }
