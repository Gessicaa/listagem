import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-tarefa', loadChildren: './lista-tarefa/lista-tarefa.module#ListaTarefaPageModule' },
  { path: 'tarefa-detail/:task', loadChildren: './tarefa-detail/tarefa-detail.module#TarefaDetailPageModule' },
  { path: 'nova-tarefa-modal', loadChildren: './nova-tarefa-modal/nova-tarefa-modal.module#NovaTarefaModalPageModule' },
  { path: 'lista-aluno', loadChildren: './lista-aluno/lista-aluno.module#ListaAlunoPageModule' },
  { path: 'novo-aluno-modal', loadChildren: './novo-aluno-modal/novo-aluno-modal.module#NovoAlunoModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
