import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiationPageComponent } from './initiation-page/initiation-page.component';

const routes: Routes = [
  { path: '', component: InitiationPageComponent }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
