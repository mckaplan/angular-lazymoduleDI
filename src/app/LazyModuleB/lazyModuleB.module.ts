import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyModuleBComponent } from '../LazyModuleB/lazyModuleB.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LazyModuleBComponent }]),
  ],
})
export class LazyModuleBModule {}
