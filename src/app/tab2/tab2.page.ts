import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private toastController: ToastController) {}

  async ngOnInit() {
    const toast = await this.toastController.create({
      message: 'Olá! Meu nome é Blá, estou aqui para te ajudar.',
      duration: 3500,
      position: 'top'
    });

    await toast.present();
  }
}
