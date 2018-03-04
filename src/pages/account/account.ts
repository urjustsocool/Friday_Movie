import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CommentsProvider } from "../../providers/comments/comments"

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  settingPage = 'SettingPage';
  profilePage = 'ProfilePage';
  movieDetailPage = 'MovieDetailPage';
  loginPage  = "LoginPage";
  hasLoggedIn:boolean;
  constructor(public navCtrl: NavController, public commentsProvider:CommentsProvider) {
    this.commentsProvider.getAllMine();
  }
  ionViewWillEnter() {
    this.getLoginState();
  }
  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }
  openMovieDetail(){
    this.navCtrl.push(this.movieDetailPage).then(value => {
      return value;
    });
  }
  getLoginState () {
    this.hasLoggedIn = true;
  }
}
