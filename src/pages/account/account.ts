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
    console.log(this.userProvider.user.photoURL);
  }

  ionViewWillEnter() {
    this.getLoginState();
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  openMovieDetail() {
    this.navCtrl.push(this.movieDetailPage).then(value => {
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
