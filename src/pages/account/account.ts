import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments"
import {UserProvider} from "../../providers/user/user";
import {CookieService} from 'angular2-cookie/services/cookies.service';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  settingPage = 'SettingPage';
  profilePage = 'ProfilePage';
  movieDetailPage = 'MovieDetailPage';
  loginPage = "LoginPage";
  hasLoggedIn: boolean;

  constructor(public navCtrl: NavController, public commentsProvider: CommentsProvider, public userProvider: UserProvider, public cookieService: CookieService) {
    this.commentsProvider.getAllMine();
    this.userProvider.getUser();
  }

  ionViewWillEnter() {
    this.getLoginState();
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  openMovieDetail(movieId) {
    this.navCtrl.push(this.movieDetailPage,{id:movieId}).then(value => {
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
  timestampToDate(timestamp: number) {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    return Y + M + D;
  }
}
