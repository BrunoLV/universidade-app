import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './components/alunos/alunos.component';
import { AlunosService } from './services/alunos.service';

import { AppPipesModule } from '../app-pipes/app-pipes.module';

import { AlunoComponent } from './components/aluno/aluno.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    AppPipesModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [AlunosComponent, AlunoComponent],
  providers: [AlunosService]
})
export class AlunosModule { }
