import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  template: `
    <h2>Обрані користувачі</h2>
    <ul>
      <li *ngFor="let user of favoriteUsers">
        {{ user.name.first }} {{ user.name.last }}
        <button (click)="removeFromFavorites(user)">Видалити</button>
      </li>
    </ul>
    <button (click)="clearFavorites()">Очистити обране</button>
  `,
})
export class FavoritesComponent implements OnInit {
  favoriteUsers: any[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteUsers = this.favoriteService.getFavorites();
  }

  removeFromFavorites(user: any): void {
    const index = this.favoriteUsers.indexOf(user);
    if (index !== -1) {
      this.favoriteService.removeFromFavorites(index);
      this.favoriteUsers.splice(index, 1);
    }
  }

  clearFavorites(): void {
    this.favoriteService.clearFavorites();
    this.favoriteUsers = [];
  }
}