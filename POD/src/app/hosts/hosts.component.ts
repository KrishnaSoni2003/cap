import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  cards = [
    {
      image: "https://drive.google.com/uc?export=view&id=1ekoiufIfv_GNklZqKgt-qb5aGM1r-9-R",
      name: "Dan Brown",
      number_podcasts: 200
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1iT6PcXRR-EQvsamci9gnQFFjvIdBMeJm",
      name: "Ganesh Prasad",
      number_podcasts: 110
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1qu5MW3zo_7ZEmOM4x7YmYnCuCF0ZBCsB",
      name: "Jane Henry",
      number_podcasts: 245
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1zXmNsN2fdnFF3M-cw_qBUNPztxm9Pv4w",
      name: "Wamsi Murti",
      number_podcasts: 150
    },
    {
      image: "https://drive.google.com/uc?export=view&id=11Xe6PlwziUgTVrty-zivcurSf4jTCtwn",
      name: "Ankur Wariku",
      number_podcasts: 312
    },
    
  ]
}
