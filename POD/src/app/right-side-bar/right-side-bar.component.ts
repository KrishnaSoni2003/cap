// import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent {
  cards: any[] = [];
audioUrl: String = "https://drive.google.com/uc?export=view&id=1d1lcAE0UQj1Sf7Q7EyrsRtQ4460Hkt8W";
@ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  constructor(private userService: UserServiceService) { }

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

  track_art = document.querySelector('.track-art')
  track_name = document.querySelector('.track-name')
  playpause_btn = document.querySelector('.play_track')
  next_btn = document.querySelector('.next_track')
  prev_btn = document.querySelector('.prev_track')
  seek_slider = document.querySelector('.seek_slider')
  curr_time= document.querySelector('.current-time')
  total_duration = document.querySelector('.total_duration')
  curr_track=document.querySelector('#audio')

  track_index = 0;
  isPlaying= false;
  isRandom  = false;
  updateTimer = 0;

  loadTrack(track_index:any) {
    clearInterval(this.updateTimer);
    // reset();

    // this.curr_track = this.cards[track_index].audio
  }

  // audioUrl = 'https://example.com/your-audio-file.mp3';
  // isPlaying = false;

  toggleAudioPlayback() {
    // const audioPlayer: HTMLAudioElement = document.querySelector('#audioPlayer');
    const audioPlayer = this.audioPlayerRef.nativeElement;
    if (this.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
