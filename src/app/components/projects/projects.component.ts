import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [
    {
      name: 'OLX Clone',
      tech: 'React, Firebase',
      link: 'https://olx-app-clone.web.app/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Olx-App',
      img: 'assets/images/olx.png',
    },
    {
      name: 'Netfix Clone',
      tech: 'React, Tmdb Api, Axios, Material UI',
      link: 'https://faizalkhan-at.github.io/Netflix-Clone/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Netflix-Clone',
      img: 'assets/images/netflix.png',
    },
    {
      name: 'Simple Photo Editor',
      tech: 'Vanilla JavaScript, Html, Css',
      link: 'https://faizalkhan-at.github.io/Photoshop-Clone-for-YT/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Photoshop-Clone-for-YT/',
      img: 'assets/images/photoeditor.png',
    },
    {
      name: 'Windows Calculator Clone',
      tech: 'Java',
      link: 'Link not available',
      gitRepo: 'https://github.com/FaizalKhan-AT/Calculator-Java-',
      img: 'assets/images/calc.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
