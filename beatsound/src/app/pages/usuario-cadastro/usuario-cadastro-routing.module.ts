import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCadastroPage } from './usuario-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioCadastroPageRoutingModule {}
