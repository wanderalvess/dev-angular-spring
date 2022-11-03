import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { DevRoutingModule } from './dev-routing.module';
import { DevComponent } from './dev/dev.component';

//aqui os import / api
@NgModule({
  declarations: [
    DevComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    AppMaterialModule
  ]
})
export class DevModule { }
