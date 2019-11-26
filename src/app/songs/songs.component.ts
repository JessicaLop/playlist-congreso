import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs = [];
  constructor ()
   {
    this.songs=[{
tittle: 'seek and destroy',
artist: 'Metallica',
url: 'http://spotify.com',

    }]
  }

  
  ngOnInit() {
  }

}
