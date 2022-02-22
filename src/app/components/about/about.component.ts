import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  otherDetails: any[] = [
    {
      key: 'Experience',
      icon: 'fas fa-briefcase',
      value: 'Web development Intern at Banao Technologies',
    },
    {
      key: 'Place',
      icon: 'fas fa-map-marker-alt',
      value: 'Kollam,Kerala,India',
    },
    {
      icon: 'fas fa-school',
      key: 'School',
      value: 'TKM HSS Karicode,Kollam',
    },
    {
      icon: 'fas fa-graduation-cap',
      key: 'College',
      value: 'Sree Narayana College of Technology (BCA)',
    },
    {
      icon: 'fas fa-user-alt',
      key: 'Age',
      value: '19 years',
    },
    {
      icon: 'fas fa-birthday-cake',
      key: 'Date of Birth',
      value: '03 May 2002',
    },
    {
      icon: 'fas fa-email',
      key: 'Email',
      value: 'faizalkhankpm@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
