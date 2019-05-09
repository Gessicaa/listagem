import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage {

  title = "Lista de compras";
  compras = [
    {
      "produto": "Tomate",
      "preco": "2,50"
    },

    {
      "produto": "Cenoura",
      "preco": "2,50"
    },

    {
      "produto": "Batata",
      "preco": "3,00"
    },

    {
      "produto": "Batata doce",
      "preco": "4,00"
    },

    {
      "produto": "Banana",
      "preco": "5,00"
    },


  ];

  nova_compra = this.criar_nova_compra();

  //# Declara uma instancia no construtor
  constructor(public toastController: ToastController, public alertController: AlertController) { }

  async add() {
    this.compras.push(this.nova_compra);
    this.nova_compra = this.criar_nova_compra();

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
            this.nova_compra = compra;
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);
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
    // Atuliaza o formulario com os dados da terefa
    this.nova_compra = compra;

    // Remove o item selecionado na lista
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
  }

}
