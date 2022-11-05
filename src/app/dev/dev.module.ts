import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { DevFormComponent } from './dev-form/dev-form.component';
import { DevRoutingModule } from './dev-routing.module';
import { DevComponent } from './dev/dev.component';

//aqui os import / api
@NgModule({
  declarations: [
    DevComponent,
    DevFormComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DevModule { }
