import { Component, OnInit } from '@angular/core';
import { AlunosService, AlunoInterface } from '../../services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: AlunoInterface[];

  constructor(private alunoService: AlunosService, private router: Router) { }

  ngOnInit() {
    this.alunoService.list().subscribe(lista => this.alunos = lista);
  }

  newAluno() {
    this.router.navigate(['alunos/new']);
  }

  deleteAluno(aluno) {
    this.alunoService.delete(aluno).subscribe(response => {
      console.log('Status:' + response.status);
      const alunosAux = this.alunos;
      alunosAux.splice(alunosAux.indexOf(aluno), 1);
      this.alunos = alunosAux;
    }, error => {
      console.error('Erro: ' + error.status);
    });
  }

  editAluno(aluno) {
    this.router.navigate(['alunos', aluno.uuid]);
  }
}
