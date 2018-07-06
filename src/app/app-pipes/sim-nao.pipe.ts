import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNao'
})
export class SimNaoPipe implements PipeTransform {

  transform(flag: boolean, args?: any): string {
    return flag ? 'Sim' : 'Não';
  }

}
