import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-podcasts-cards',
  templateUrl: './podcasts-cards.component.html',
  styleUrls: ['./podcasts-cards.component.css']
})
export class PodcastsCardsComponent {
  // constructor() { }
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

  // cards = [
  //   {
  //     cover: "https://drive.google.com/uc?export=view&id=1qSnwO018rfmU8Bu-HDREUnikhXXyB59i",
  //     audio: "https://drive.google.com/uc?export=view&id=1d1lcAE0UQj1Sf7Q7EyrsRtQ4460Hkt8W",
  //     tag: "Comedy",
  //     title: "Crypto with Rohan Joshi",
  //     id: 1
  //   },
  //   {
  //     cover: "https://drive.google.com/uc?export=view&id=1PiO3sRVDnQBLqheZ97Nh0SOmxvgVDmCN",
  //     audio: "https://drive.google.com/uc?export=view&id=1JRPsZgQe1y6ad1gzE0B6s1c0f4nu6uqv",
  //     title: "Financial News Shorts",
  //     tag:"News",
  //     id: 2
  //   },
  //   {
  //     cover: "https://drive.google.com/uc?export=view&id=1e5Rx3dLA3ash6jjFh5RvQ4G4i1_Rnm84",
  //     audio: "https://drive.google.com/uc?export=view&id=17sdntmeT37fHoCnRVPhiWeodCMM7MwTL",
  //     title: "Mindset Mentor",
  //     tag:"Motivation",
  //     id: 3
  //   },
  //   {
  //     cover: "https://drive.google.com/uc?export=view&id=1AyQ8ruSQD0zvpw1Jt2AtVpo1SDz57feZ",
  //     audio: "https://drive.google.com/uc?export=view&id=1-gvbzPylZaKFGqy6tjVKlQX8AoD2S9zG",
  //     title: "Planet Money Podcast",
  //     tag: "Finance",
  //     id: 4
  //   },
  //   {
  //     cover: "https://drive.google.com/uc?export=view&id=1uokeYv0Q4dJpGgmfNLBhoPHXY4tVq_mu",
  //     audio: "https://drive.google.com/uc?export=view&id=1qU2UDGM91dA05r_XmDMjN-DoaxexsQCi",
  //     title: "Woice of Wariko",
  //     tag: "Motivation",
  //     id: 5
  //   }
  // ]

  // cards=[];


  newUser: any = {};
  cards: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe(card => {
        console.log("data",card);
        card.forEach(element => {
          this.cards.push(element);
        });
    // this.cards.push(card);
  console.log("cards",this.cards)
});
    
  }

  createUser() {
    this.userService.createUser(this.newUser)
      .subscribe(() => {
        this.loadUsers();
        this.newUser = {};
      });
  }

  editUser(user: any) {
    // Implement edit functionality
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user._id)
      .subscribe(() => this.loadUsers());
  }

}
