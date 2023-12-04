import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: any[] = []; 

  constructor() {}

  getFavorites(): any[] {
    return this.favorites;
  }

  addToFavorites(user: any): void {
    this.favorites.push(user);
  }

  removeFromFavorites(index: number): void {
    this.favorites.splice(index, 1); 
  }

  clearFavorites(): void {
    this.favorites = []; 
  }
}