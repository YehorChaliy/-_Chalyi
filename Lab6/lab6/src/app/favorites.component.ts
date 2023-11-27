
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'favorites-component',
  templateUrl: 'favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  favorite: any[] = [];

  constructor(private favoriteUsers: FavoritesService) {}

  ngOnInit()  {
    this.favoriteUsers.selected$.subscribe(async (favorite) => {
      this.favorite = await this.favoriteUsers.getUsers()
    });
  }
}