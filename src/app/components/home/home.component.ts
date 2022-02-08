import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
declare let VANTA: any;
import * as THREE from 'three';
declare let p5: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('home') home!: ElementRef;
  tl = gsap.timeline();
  socialMedia: any[] = [
    {
      link: 'https://www.instagram.com/al_techie/',
      icon: 'fab fa-instagram',
    },
    {
      link: 'https://www.linkedin.com/in/faizal-khan-at',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'https://github.com/FaizalKhan-AT',
      icon: 'fab fa-github',
    },
  ];
  constructor() {}
  ngAfterViewInit(): void {
    this.tl.from(`#social`, { x: 200, duration: 0.9 });
    gsap.from(`#header`, { y: '-100%', duration: 0.9 });
    gsap.from(`#name`, { y: '200%', duration: 2, ease: 'power1' });
    gsap.from(`#salutation`, { y: '200%', duration: 2, ease: 'power1' });
    gsap.from(`#sub`, { y: '200%', duration: 2.5, ease: 'slow' });
    let time: number = 0;
    for (let i = 0; i <= 3; i++) {
      this.tl.from(`#icon-${i}`, { x: 50, duration: 0.2 + time, ease: 'back' });
      time += 0.1;
    }
    VANTA.TRUNK({
      el: `#${this.home.nativeElement.id}`,
      mouseControls: true,
      THREE: THREE,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0,
      color: 0x5555557,
      spacing: 4.5,
      chaos: 10,
      backgroundColor: 0x060606,
      p5: p5,
    });
  }

  ngOnInit(): void {}
}
