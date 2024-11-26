import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-menupublic',
  templateUrl: './menupublic.component.html',
  styleUrls: ['./menupublic.component.css']
})
export class MenupublicComponent implements AfterViewInit {
  constructor(private router: Router) {}

  public LogIn() {
    this.router.navigate(['extranet']);
  }

  ngAfterViewInit() {
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      items: 1,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
    });
  }
}
