import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data: any;
	pages: any;
  webmedia: any;

  constructor(public navCtrl: NavController) {
    this.data = [
			{ icon:'assets/animals/bird-icon.png', audio:'./assets/sounds/bird.mp3'},
			{ icon:'assets/animals/black-cat-icon.png', audio:'./assets/sounds/cat.mp3'},
			{ icon:'assets/animals/cow-icon.png', audio:'./assets/sounds/cow.mp3'},
			{ icon:'assets/animals/dolphin-icon.png', audio:'./assets/sounds/dolphin.mp3'},
			{ icon:'assets/animals/frog-icon.png', audio:'./assets/sounds/frog.mp3'},
			{ icon:'assets/animals/pig-icon.png', audio:'./assets/sounds/pig.mp3'},
			{ icon:'assets/animals/puppy-icon.png', audio:'./assets/sounds/dog.mp3'},
		];

    this.pages = [this.data, this.data, this.data, this.data];
  }


  play(soundFile){		
		console.log(soundFile);

		const onStatusUpdate = (status) => console.log(status)
			
      if(this.webmedia) {
				this.webmedia.pause();
			}

			this.webmedia = new Audio(soundFile);
			this.webmedia.load();
			this.webmedia.play();

  }

}