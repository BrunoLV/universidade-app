import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlDomain = 'http://localhost:8080/alunos';

export interface AlunoInterface {
  uuid: string;
  nome: string;
  documento: string;
  matricula: string;
  dataCadastro: Date;
  telefone: string;
  email: string;
  ativo: boolean;
}

@Injectable()
export class AlunosService {

  headers: HttpHeaders;
  alunos: AlunoInterface[];

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  list(): Observable<Array<AlunoInterface>> {
    return this.http.get<AlunoInterface[]>(urlDomain);
  }

  create(aluno: AlunoInterface): Observable<HttpResponse<void>> {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<HttpResponse<void>>(urlDomain, aluno, { headers: this.headers });
  }

  delete(aluno: AlunoInterface): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(urlDomain + '/' + aluno.uuid, { observe: 'response' });
  }

  get(uuid: string): Observable<AlunoInterface> {
    return this.http.get<AlunoInterface>(urlDomain + '/' + uuid);
  }

  update(aluno: AlunoInterface): Observable<HttpResponse<void>> {
    this.headers.append('Content-Type', 'application/json');
    return this.http.put<HttpResponse<void>>(urlDomain + '/' + aluno.uuid, aluno, { headers: this.headers });
  }

}
