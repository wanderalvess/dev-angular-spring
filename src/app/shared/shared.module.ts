import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NamePipe } from './pipes/name.pipe';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    NamePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule

  ],
  exports: [
    ErrorDialogComponent,
    NamePipe
  ]

})
export class SharedModule { }
