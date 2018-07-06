import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimNaoPipe } from './sim-nao.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimNaoPipe],
  exports: [SimNaoPipe]
})
export class AppPipesModule { }
