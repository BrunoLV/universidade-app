import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';
import { AlunoComponent } from './components/aluno/aluno.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/new', component: AlunoComponent },
  { path: 'alunos/:uuid', component: AlunoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
