import { Component, OnInit, Inject } from '@angular/core';
import { AppService, Results } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'Lab5';
  users: any[] = [];
  displayedColumns:string[] = ['name','surname','birthday','city','postcode']
  constructor(private appService:AppService, private dialog:MatDialog){}

  ngOnInit():void{
    this.appService.getUsers().subscribe(users => {
      this.users = users.results;
    })
  }

  openModal(row:any){
      this.dialog.open(DialogComponent,{data:row});
  }
}

@Component({
  selector:'popup-component',
  template:
  `<div class="dialog-comp"><p>Name: {{users_data.name.first}}</p>
  <p>Surname: {{users_data.name.last}}</p>
  <p>Phone: {{users_data.phone}}</p>
  <p>Email: {{users_data.email}}</p>
  <p>City: {{users_data.location.city}}</p>
  <p>Country: {{users_data.location.country}}</p>
  <p>Login: {{users_data.login.username}}</p>
  <p>Password: {{users_data.login.password}}</p></div>
  `
})

export class DialogComponent{
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public users_data: any){}
}