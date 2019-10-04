import { Component, OnInit } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  gender: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor() { }

users: User []  = [
    {
      firstName: 'Kavya',
      lastName: 'Murthy',
      gender: 'Female'
    },
    {
      firstName: 'Lakshmi',
      lastName: 'Murthy',
      gender: 'Female'
    },
    {
      firstName: 'Ashwini',
      lastName: 'Suresh',
      gender: 'Female',
    }
  ];

ngOnInit() {
  }


}
