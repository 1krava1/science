import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
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
    {
      'route': 'register',
      'text': 'login'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
