import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";

@IonicPage()
@Component({
  selector: 'page-Movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public commentsProvider:CommentsProvider) {
    this.commentsProvider.getMine();
    this.commentsProvider.getHotests();
  }

}
