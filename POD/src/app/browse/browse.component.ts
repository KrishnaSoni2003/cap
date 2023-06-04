import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  cards = [
    {
      cover: "https://drive.google.com/uc?export=view&id=1qSnwO018rfmU8Bu-HDREUnikhXXyB59i",
      audio: "https://drive.google.com/uc?export=view&id=1d1lcAE0UQj1Sf7Q7EyrsRtQ4460Hkt8W",
      id: 1
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1PiO3sRVDnQBLqheZ97Nh0SOmxvgVDmCN",
      audio: "https://drive.google.com/uc?export=view&id=1JRPsZgQe1y6ad1gzE0B6s1c0f4nu6uqv",
      id: 2
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1e5Rx3dLA3ash6jjFh5RvQ4G4i1_Rnm84",
      audio: "https://drive.google.com/uc?export=view&id=17sdntmeT37fHoCnRVPhiWeodCMM7MwTL",
      id: 3
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1AyQ8ruSQD0zvpw1Jt2AtVpo1SDz57feZ",
      audio: "https://drive.google.com/uc?export=view&id=1-gvbzPylZaKFGqy6tjVKlQX8AoD2S9zG",
      id: 4
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1uokeYv0Q4dJpGgmfNLBhoPHXY4tVq_mu",
      audio: "https://drive.google.com/uc?export=view&id=1qU2UDGM91dA05r_XmDMjN-DoaxexsQCi",
      id: 5
    }
  ]
}
