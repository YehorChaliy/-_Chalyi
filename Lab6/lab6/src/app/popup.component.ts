
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoritesService } from './favorites.service';

@Component({
    selector: 'popup-component',
    templateUrl: 'popup.component.html',
})
export class UserDetailsModal {
  @Input() users: any;

  constructor(private modalController: ModalController, private  favoriteUsers: FavoritesService) {}

  addToFavorites() {
    this.favoriteUsers.addToFavorites(this.users)
  }

  closeModal() {
    this.modalController.dismiss();
  }
}