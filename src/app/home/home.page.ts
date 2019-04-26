import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Lista de tarefas";
  tarefas = [
    {
      "descricao": "Fazer cafe da manha",
      "horario": "06:00"
    },

    {
      "descricao": "Ir trabalhar",
      "horario": "07:30"
    },

    {
      "descricao": "Fazer almoço",
      "horario": "12:30"
    },

    {
      "descricao": "cuidar da casa",
      "horario": "14:00"
    },

    {
      "descricao": "estudar",
      "horario": "15:30"
    },

    {
      "descricao": "dormir",
      "horario": "23:00"
    },

  ];

  nova_tarefa = this.criar_nova_tarefa();

  add() {
    this.tarefas.push(this.nova_tarefa);
    this.nova_tarefa = this.criar_nova_tarefa();
  }

  criar_nova_tarefa() {
    return {
      "descricao": "",
      "horario": ""
    }
  }

  excluir(tarefa) {
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }

  editar(tarefa) {
    // Atuliaza o formulario com os dados da terefa
    this.nova_tarefa = tarefa;

    // Remove o item selecionado na lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }

}
