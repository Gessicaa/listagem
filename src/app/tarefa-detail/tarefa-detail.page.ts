import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toASCII } from 'punycode';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.page.html',
  styleUrls: ['./tarefa-detail.page.scss'],
})
export class TarefaDetailPage implements OnInit {

  task;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('task');
  }

}
