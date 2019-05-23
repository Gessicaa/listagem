import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovaTarefaModalPage } from '../nova-tarefa-modal/nova-tarefa-modal.page';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage {

  title = "Lista de tarefas";
  tarefas = [];
  TAREFAS_KEY = 'tarefas'


  //# Declara uma instancia no construtor
  constructor(public toastController: ToastController, public alertController: AlertController, public storage: Storage, public modalController: ModalController) {
    this.storage.get('TAREFAS_KEY').then((data) => {
      if (data) {

      this.tarefas = data;
      }
    });
   }

  async add(tarefa) {

    this.tarefas.push(tarefa);
    this.storage.set('TAREFAS_KEY',this.tarefas);

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Nova tarefa cadastrada com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_tarefa() {
    return {
      "descricao": "",
      "horario": ""
    }
  }

  async excluir(tarefa) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir a tarefa?',
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
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            this.storage.set('TAREFAS_KEY',this.tarefas)
            //# Cria o toast
            const toast = await this.toastController.create({
              message: 'Tarefa excluida com sucesso!',
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

  editar(tarefa) {
    // Remove o item selecionado na lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }

  async exibir_modal() {
    const modal = await this.modalController.create({
      component: NovaTarefaModalPage
    });

    await modal.present();
    
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });

   }

}
