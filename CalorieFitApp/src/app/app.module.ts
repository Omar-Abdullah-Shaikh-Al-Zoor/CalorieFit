import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DietPageComponent } from './diet-page/diet-page.component';
import { InitiationPageComponent } from './initiation-page/initiation-page.component';
import { FormsModule } from '@angular/forms';
import { WorkoutPageComponent } from './workout-page/workout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DietPageComponent,
    InitiationPageComponent,
    WorkoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // Add this
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
