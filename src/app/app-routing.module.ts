import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {MapComponent} from './components/map/map.component';
import {PlaceComponent} from './components/place/place.component';
import {PlacesComponent} from './components/places/places.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {EditPlaceComponent} from './components/edit-place/edit-place.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
    children: [
      {
        path: 'user/:id',
        component: EditUserComponent
      },
      {
        path: 'place/:id',
        component: EditPlaceComponent
      },
      {
        path: 'user',
        component: EditUserComponent
      },
      {
        path: 'place',
        component: EditPlaceComponent
      },
    ]
  },
  {
    path: 'place/:id',
    component: PlaceComponent,
  },
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
