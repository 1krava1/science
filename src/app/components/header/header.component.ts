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
      'route': 'places',
      'text': 'places'
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
