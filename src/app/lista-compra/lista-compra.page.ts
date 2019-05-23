import { Component } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovaCompraModalPage } from '../nova-compra-modal/nova-compra-modal.page';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage {

  title = "Lista de compras";
  compras = [];
  COMPRAS_KEY = 'compras'


  //# Declara uma instancia no construtor
  constructor(public toastController: ToastController, public alertController: AlertController, public storage: Storage, public modalController: ModalController) {
    this.storage.get('COMPRAS_KEY').then((data) => {
      if (data) {

      this.compras = data;
      }
    });
   }

  async add(compra) {
    this.compras.push(compra);
    this.storage.set('COMPRAS_KEY',this.compras);

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Nova compra cadastrada com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_compra() {
    return {
      "produto": "",
      "preco": ""
    }
  }

  async excluir(compra) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir a compra?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);
            this.storage.set('COMPRAS_KEY',this.compras)
            //# Cria o toast
            const toast = await this.toastController.create({
              message: 'Compra excluida com sucesso!',
              duration: 5000,
              position: 'top'
            });

            //# Exibir a mensagem na tela
            toast.present();

          }

        }
      ]
    });

    await alert.present();
  }

  editar(compra) {
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
  }

  async exibir_modal() {
    const modal = await this.modalController.create({
      component: NovaCompraModalPage
    });

    await modal.present();
    
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });

   }
}
