import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-Movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
