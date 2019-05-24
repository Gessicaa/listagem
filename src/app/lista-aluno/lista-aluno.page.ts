import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovoAlunoModalPage } from '../novo-aluno-modal/novo-aluno-modal.page';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.page.html',
  styleUrls: ['./lista-aluno.page.scss'],
})
export class ListaAlunoPage {

  title = "Lista de alunos";
  alunos = [
    {
      "nome": "",
      "descricao": "",
      "imagem": "",
      "likes": ""
    }
  ];
  ALUNOS_KEY = 'alunos'

  constructor(public toastController: ToastController, public alertController: AlertController, public storage: Storage, public modalController: ModalController) {
    this.storage.get('ALUNOS_KEY').then((data) => {
      if (data) {

      this.alunos = data;
      }
    });
   }


   async add(aluno) {

    this.alunos.push(aluno);
    this.storage.set('ALUNOS_KEY',this.alunos);

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Novo aluno cadastrado com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_aluno() {
    return {
      "nome": "",
      "perfil": "",
      "imagem": "",
      "likes": ""
    }
  }

  async excluir(aluno) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir o aluno?',
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
            var i = this.alunos.indexOf(aluno);
            this.alunos.splice(i, 1);
            this.storage.set('ALUNOS_KEY',this.alunos)
            //# Cria o toast
            const toast = await this.toastController.create({
              message: 'Aluno excluido com sucesso!',
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

  editar(aluno) {
    // Remove o item selecionado na lista
    var i = this.alunos.indexOf(aluno);
    this.alunos.splice(i, 1);
  }

  async exibir_modal() {
    const modal = await this.modalController.create({
      component: NovoAlunoModalPage
    });

    await modal.present();
    
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });

   }
}
