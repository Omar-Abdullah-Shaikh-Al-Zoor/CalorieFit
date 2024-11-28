import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DietPageComponent } from './diet-page/diet-page.component';
import { InitiationPageComponent } from './initiation-page/initiation-page.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DietPageComponent,
    InitiationPageComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    WorkoutPageComponent,
    DietPageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
