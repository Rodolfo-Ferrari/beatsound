import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioCadastroPageRoutingModule } from './usuario-cadastro-routing.module';

import { UsuarioCadastroPage } from './usuario-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioCadastroPageRoutingModule
  ],
  declarations: [UsuarioCadastroPage]
})
export class UsuarioCadastroPageModule {}
