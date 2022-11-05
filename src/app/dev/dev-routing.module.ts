import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevFormComponent } from './dev-form/dev-form.component';

import { DevComponent } from './dev/dev.component';
const routes: Routes = [
  { path: '', component: DevComponent },
  { path: 'new', component: DevFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
