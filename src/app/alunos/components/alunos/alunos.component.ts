import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService, AlunoInterface } from '../../services/alunos.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: AlunoInterface[];
  alunoSelecionado: AlunoInterface;
  modalDeleteRef: NgbModalRef;

  message: string;

  constructor(private alunoService: AlunosService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.alunoService.list().subscribe(lista => this.alunos = lista);
  }

  newAluno() {
    this.router.navigate(['alunos/new']);
  }

  prepareDelete(content, aluno: AlunoInterface) {
    this.alunoSelecionado = aluno;
    this.modalDeleteRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  deleteAluno() {
    this.alunoService.delete(this.alunoSelecionado).subscribe(response => {
      const alunosAux = this.alunos;
      alunosAux.splice(alunosAux.indexOf(this.alunoSelecionado), 1);
      this.alunos = alunosAux;
      this.alunoSelecionado = null;
      this.message = 'Registro removido com sucesso.';
      this.modalDeleteRef.close();
    }, error => {
      console.error('Erro: ' + error.status);
    });
  }

  editAluno(aluno) {
    this.router.navigate(['alunos', aluno.uuid]);
  }

  dismissDialogDelete() {
    this.alunoSelecionado = null;
    this.modalDeleteRef.dismiss();
  }

  closeDialogDelete() {
    this.alunoSelecionado = null;
    this.modalDeleteRef.close();
  }

}
