import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
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
    AppMaterialModule,
    SharedModule
  ]
})
export class DevModule { }
