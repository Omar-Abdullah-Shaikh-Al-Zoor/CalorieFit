import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiationPageComponent } from './initiation-page/initiation-page.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DietPageComponent } from './diet-page/diet-page.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'setup', component: InitiationPageComponent },
  { path: 'createDietPlan', component: DietPageComponent },
  { path: 'home', component: AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'workout-page', component: WorkoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
