import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiationPageComponent } from './initiation-page/initiation-page.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DietPageComponent } from './diet-page/diet-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'setup', component: InitiationPageComponent },
  { path: 'createDietPlan', component: DietPageComponent },
  { path: 'home', component: AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
