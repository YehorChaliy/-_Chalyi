import { Component, OnInit, Inject } from '@angular/core';
import { AppService, Results } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{FavoriteService} from './favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService, FavoriteService]
})
export class AppComponent implements OnInit {
  title = 'Lab5';
  users: any[] = [];
  favoriteUsers: any[] = [];
  displayedColumns:string[] = ['name','surname','birthday','city','postcode']
  constructor(private appService:AppService, private dialog:MatDialog, private favoriteService: FavoriteService){}
  

  ngOnInit():void{
    this.appService.getUsers().subscribe(users => {
      this.users = users.results;
      this.favoriteUsers = this.favoriteService.getFavorites();
    })
  }

  openModal(row: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: row
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.favoriteService.addToFavorites(row);
        this.favoriteUsers = this.favoriteService.getFavorites();
      }
    });
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
  <button (click)="addToFavorites()">Додати у обране</button>
  `
})

export class DialogComponent{
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public users_data: any,
    private favoriteService: FavoriteService 
  ) {}

  addToFavorites() {
    this.favoriteService.addToFavorites(this.users_data);
    this.dialogRef.close(true);
  }
}