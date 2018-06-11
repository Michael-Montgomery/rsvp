import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  events = [
    {
      title: 'Alans Baf Mitzvah',
      private: true,
    },
    {
      title: 'Toms retirement party',
      private: true,
    },
    {
      title: 'Silicon Valley viewing party',
      private: true,
    },{
      title: 'Scented Soaps launch party',
      private: true,
    },{
      title: 'Matthews-Canfield Wedding',
      private: true,
    },{
      title: 'city council meeting',
      private: true,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
