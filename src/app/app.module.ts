import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';
import { EditComponent } from './components/edit/edit.component';
import { PlaceComponent } from './components/place/place.component';
import { PlacesComponent } from './components/places/places.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';
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
    RegisterComponent,
    LoginComponent,
    EditUserComponent,
    EditPlaceComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
