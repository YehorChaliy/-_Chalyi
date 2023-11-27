
import { Component, OnInit } from '@angular/core';
import { DataService } from './api.users.service';
import { ModalController } from '@ionic/angular';
import { UserDetailsModal } from './popup.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: DataService, private modalController: ModalController) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.dataService.getUsers().subscribe((data: any) => {
      this.users = data.results;
    });
  }

  async openModal(user: any) {
    const modal = await this.modalController.create({
      component: UserDetailsModal,
      componentProps: { users: user }
    });
    return await modal.present();
  }
}
