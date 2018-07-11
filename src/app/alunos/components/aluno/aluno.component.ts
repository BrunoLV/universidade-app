import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunoForm: FormGroup;
  uuidEdit: string;
  message: string;

  constructor(private alunoService: AlunosService, private formBuilder: FormBuilder,
    private router: Router, private activetedRoute: ActivatedRoute) {
    this.alunoForm = formBuilder.group({
      uuid: [''],
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      documento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      dataCadastro: [''],
      ativo: ['']
    });
  }

  ngOnInit() {
    let uuid: string = null;
    this.activetedRoute.params.subscribe(params => uuid = params['uuid']);
    if (uuid) {
      this.alunoService.get(uuid).subscribe(aluno => {
        this.alunoForm.setValue(aluno);
        this.uuidEdit = uuid;
      });
    } else {
      this.uuidEdit = null;
    }
  }

  save() {
    if (!this.uuidEdit) {
      this.alunoService.create(this.alunoForm.value).subscribe(() => {
        this.router.navigate(['/alunos']);
      }, error => {
        this.message = error.message;
      });
    } else {
      this.alunoService.update(this.alunoForm.value).subscribe(() => {
        this.router.navigate(['/alunos']);
      }, error => {
        this.message = error.message;
      });
    }
  }

}
