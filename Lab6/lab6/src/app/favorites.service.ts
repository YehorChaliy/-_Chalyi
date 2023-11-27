
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
    private favoriteUsers: any[] = [];
    private selectedUsersSubject = new BehaviorSubject<any[]>([]);
    selected$ = this.selectedUsersSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedFavorites = await this.storage.get('favoriteUsers');
    if (storedFavorites) {
      this.selectedUsersSubject.next(storedFavorites);
    }
  }

  async getUsers() {
    return this.storage.get('favoriteUsers');
  }

  async addToFavorites(user: any) {
    this.favoriteUsers.push(user);
    await this.storage.set('favoriteUsers', this.favoriteUsers);
    this.selectedUsersSubject.next(this.favoriteUsers);
  }
}