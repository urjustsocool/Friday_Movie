import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, ToastController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import { CookieService } from 'angular2-cookie/services/cookies.service';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  profilePage = 'ProfilePage';

  hasLoggedIn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public userProvider:UserProvider,public cookieService:CookieService) {
  }

  ionViewWillEnter() {
    this.getLoginState();
  }

  getLoginState() {
    if (this.cookieService.get("token")) {
      this.hasLoggedIn = true;
    }
    else {
      this.hasLoggedIn = false;
    }
  }

  onLogout() {
    console.log("退出登录");
    this.cookieService.removeAll();
    this.navCtrl.pop();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  presentLogoutActionSheet() {
    let logoutActionSheet = this.actionSheetCtrl.create({
      title: '确定要退出登录吗？',
      buttons: [{
        text: '确定', handler: () => {
          this.onLogout();
        }
      }, {text: '取消', role: 'cancel'}]
    });
    logoutActionSheet.present().then(value => {
      return value;
    })
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }
}
