import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  profilePage = 'ProfilePage';

  hasLoggedIn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.getLoginState();
  }

  getLoginState() {
    console.log("判断是否登录");
  }

  onLogout() {
    console.log("退出登录");
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
