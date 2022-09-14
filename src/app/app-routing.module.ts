import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazyModuleA',
    loadChildren: () =>
      import('./LazyModuleA/lazyModuleA.module').then(
        (m) => m.LazyModuleAModule
      ),
  },
  {
    path: 'lazyModuleB',
    loadChildren: () =>
      import('./LazyModuleB/lazyModuleB.module').then(
        (m) => m.LazyModuleBModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
