import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user/user.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';
import { EditComponent } from './components/edit/edit.component';
import { PlaceComponent } from './components/issue/issue.component';
import { PlacesComponent } from './components/issues/issues.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SignInComponent } from './components/signin/signin.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditPlaceComponent } from './components/edit-issue/edit-issue.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    EditComponent,
    PlaceComponent,
    PlacesComponent,
    UserComponent,
    UsersComponent,
    SignUpComponent,
    SignInComponent,
    EditUserComponent,
    EditPlaceComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'science' })
  ],
  providers: [
    FormBuilder,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
