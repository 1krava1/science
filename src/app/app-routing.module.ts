import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {MapComponent} from './components/map/map.component';
import {PlaceComponent} from './components/issue/issue.component';
import {PlacesComponent} from './components/issues/issues.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {EditPlaceComponent} from './components/edit-issue/edit-issue.component';

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
        path: 'issue/:id',
        component: EditPlaceComponent
      },
      {
        path: 'user',
        component: EditUserComponent
      },
      {
        path: 'issue',
        component: EditPlaceComponent
      },
    ]
  },
  {
    path: 'issue/:id',
    component: PlaceComponent,
  },
  {
    path: 'issues',
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
