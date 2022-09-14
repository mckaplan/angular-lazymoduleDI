import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyModuleAComponent } from '../LazyModuleA/lazyModuleA.component';

@NgModule({
  declarations: [LazyModuleAComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LazyModuleAComponent }]),
  ],
})
export class LazyModuleAModule {}
