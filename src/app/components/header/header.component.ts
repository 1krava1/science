import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {
      'route': 'map',
      'text': 'map'
    },
    {
      'route': 'issues',
      'text': 'issues'
    },
    {
      'route': 'users',
      'text': 'users'
    },
  ];
  profileLinks = [
    {
      'route': 'signin',
      'text': 'sign in'
    },
    {
      'route': 'signup',
      'text': 'sign up'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
