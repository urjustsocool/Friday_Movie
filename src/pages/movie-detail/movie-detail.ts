import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";
import {MoviesProvider} from "../../providers/movies/movies";
import {CookieService} from 'angular2-cookie/services/cookies.service';

@IonicPage()
@Component({
  selector: 'page-Movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  editCmtPage = "EditCmtPage";
  id = this.navParams.get("id");
  hasLoggedIn: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public commentsProvider:CommentsProvider, public moviesProvider:MoviesProvider,public cookieService: CookieService) {
  }
  ionViewWillEnter() {
    console.log(this.id);
    this.commentsProvider.myComment = null;
    this.commentsProvider.otherComments = null;
    this.commentsProvider.getCmtsByMovieId(this.id);
    this.moviesProvider.getMovieDetail(this.id);
    this.getLoginState();
  }
  openPage(page: string, type:string, id:string, title:string) {
    if(page === "EditCmtPage"){
      if(!this.hasLoggedIn){
        this.presentToast("未登录，请先登录");
        return;
      }
    }
    this.navCtrl.push(page,{type,id,title}).then(value => {
      return value;
    });
  }
  processImgUrl(val:string) {
    //Special process Failed to load resource: the server responded with a status of 403 (Forbidden) for loading img7 URL
    return val.replace('img7','img3')
  }
  timestampToDate(timestamp: number) {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    return Y + M + D;
  }
  vote (id) {
    if(this.hasLoggedIn) {
      this.commentsProvider.vote(id).then((res: { code: number }) => {
        if (res.code === 0) {
          this.commentsProvider.getCmtsByMovieId(this.id);
        }
      })
    }
    else {
      this.presentToast("未登录，请先登录");
    }
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }
  getLoginState() {
    if (this.cookieService.get("token")) {
      this.hasLoggedIn = true;
    }
    else {
      this.hasLoggedIn = false;
    }
  }
}
