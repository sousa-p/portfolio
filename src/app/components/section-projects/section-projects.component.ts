import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import Swiper from 'swiper';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss'],
})
export class SectionProjectsComponent implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  projects: Project[] = [
    {
      image: '../../../assets/images/projects/boituvet.png',
      title: "Boituvet's Exam Management",
      desc: 'I led the backend development for a veterinary clinic, creating a robust database schema, RESTful API, and integrating it with the frontend. The system controls statuses, patient information, and assignments of veterinarians across three user categories.',
      website: 'https://labbvet.boituvet.com.br',
      stacks: ['vuejs', 'php', 'mysql', 'git'],
    },
    {
      image: '../../../assets/images/projects/boitulab.png',
      title: "Boituvet's multi-clinic examination system",
      desc: 'I managed the backend development for a multi-clinic examination request and delivery system, overseeing file transmission and receipt. My responsibilities included integrating with the frontend, constructing a API, create the databases, and more.',
      website: 'https://boitulab.com.br',
      stacks: ['angular', 'typescript', 'php', 'mysql', 'git'],
    },
    {
      image: '../../../assets/images/projects/agendar-me.png',
      title: 'Agendar.me Scheduling System',
      desc: 'A versatile system created from scratch to serve both clients and businesses. It provides detailed appointment tracking, client data management, and flexible scheduling options. Ensuring efficient communication, it delivers an intuitive dashboard for streamlined administration.',
      code: 'https://github.com/sousa-p/agendar-me',
      stacks: ['angular', 'typescript', 'php', 'mysql', 'git'],
    },
    {
      image: '../../../assets/images/projects/pokeapi.png',
      title: 'PokeAPI Flutter',
      desc: "A Flutter project integrating with the PokeAPI, offering comprehensive access to Pokémon data. Leveraging Flutter's capabilities, the app delivers seamless interaction, displaying detailed information on various Pokémon species, abilities, types, and more.",
      code: 'https://github.com/sousa-p/pokeapi_flutter',
      stacks: ['flutter', 'dart', 'figma'],
    },
    {
      image: '../../../assets/images/projects/age-calculator.png',
      title: 'Age Calculator App',
      desc: 'This Frontend Mentor challenge implements an MVC architecture. It accurately computes age in years, months, and days from user-inputted dates, featuring validation checks, responsive design, interactive element states, and a bonus age number display animation.',
      website: 'https://sousa-p.github.io/age_calculator_front_end_mentor/',
      code: 'https://github.com/sousa-p/age_calculator_front_end_mentor',
      stacks: ['flutter', 'dart', 'figma'],
    },
    {
      image: '../../../assets/images/projects/correio-elegante.png',
      title: 'Love Latters System',
      desc: 'I handled the backend development using Lumen, PHP, and SQLite for an online "Correio Elegante" (love letters) project at EPA 2023. I implemented JWT token-based login, modeled the database using diagrams, and established API communication for the frontend',
      code: 'https://github.com/sousa-p/correio-elegante',
      stacks: ['laravel', 'sqlite', 'javascript'],
    },
    {
      image: '../../../assets/images/projects/tictactoe.png',
      title: 'Tic Tac Toe Flutter Game',
      desc: 'A Flutter project applying the MVC (Model-View-Controller) architecture, where I developed crucial logic and state management for the application. Utilized various Dart ecosystem libraries to enhance functionality.',
      website: 'https://sousa-p.github.io/tic_tac_toe',
      code: 'https://github.com/sousa-p/tic_tac_toe',
      stacks: ['flutter', 'dart'],
    },
    {
      image: '../../../assets/images/projects/restapi.png',
      title: 'REST countries API',
      desc: 'This project tackles the Frontend Mentor challenge by integrating the REST Countries API and implementing color theme switching. Utilizing Angular, Ionic, and JSON Server, the app efficiently fetches country data, allowing users to perform search, filtering, and explore detailed views.',
      code: 'https://github.com/sousa-p/rest-country-api',
      stacks: ['angular', 'typescript', 'figma'],
    },
    {
      image: '../../../assets/images/projects/ip-tracker.png',
      title: 'IP tracker',
      desc: 'I developed a solution for the IP Address Tracker challenge by Frontend Mentor. The project enables users to view device-responsive layouts, utilize interactive elements with hover states, and discover IP address details and locations. Credit goes to Frontend Mentor for providing this opportunity to enhance coding skills.',
      code: 'https://github.com/sousa-p/api-tracker',
      stacks: ['html', 'css', 'javascript', 'bootstrap'],
    },
    {
      image: '../../../assets/images/projects/pomodoro.png',
      title: 'Pomodoro',
      desc: 'Developed a Pomodoro timer project incorporating Javascript, HTML, CSS, and Bootstrap for design elements. The timer allows efficient time management using the Pomodoro technique, enabling users to set work and break intervals, enhancing productivity and focus.',
      code: 'https://github.com/sousa-p/pomodoro',
      website: 'https://sousa-p.github.io/pomodoro',
      stacks: ['html', 'css', 'javascript'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      loop: false,
      centeredSlides: true,
      centerInsufficientSlides: true,
      centeredSlidesBounds: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: true,
      },
    });
  }

  ngAfterViewInit() {
    this.swiper?.update();
  }
}
