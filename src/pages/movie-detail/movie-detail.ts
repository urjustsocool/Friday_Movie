import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";
import {MoviesProvider} from "../../providers/movies/movies";

@IonicPage()
@Component({
  selector: 'page-Movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  editCmtPage = "EditCmtPage";
  id = this.navParams.get("id");
  constructor(public navCtrl: NavController, public navParams: NavParams, public commentsProvider:CommentsProvider, public moviesProvider:MoviesProvider) {
    this.commentsProvider.getMine();
    this.commentsProvider.getHotests();
    this.moviesProvider.getMovieDetail(this.id);
  }
  ionViewWillEnter() {
    console.log(this.id);
  }
  openPage(page: string,type:string) {
    this.navCtrl.push(page,{type}).then(value => {
      return value;
    });
  }
  processImgUrl(val:string) {
    //Special process Failed to load resource: the server responded with a status of 403 (Forbidden) for loading img7 URL
    return val.replace('img7','img3')
  }

}
