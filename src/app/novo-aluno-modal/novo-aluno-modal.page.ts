import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo-aluno-modal',
  templateUrl: './novo-aluno-modal.page.html',
  styleUrls: ['./novo-aluno-modal.page.scss'],
})
export class NovoAlunoModalPage implements OnInit {

  novo_aluno = {
    'nome': '',
    'descricao': '',
    'imagem': '',
    'likes': ''
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.novo_aluno);

  }

}
