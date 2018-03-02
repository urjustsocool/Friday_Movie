import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ActionSheetController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  editUserNamePage = 'EditUsernamePage';

  user: { photoURL: string, name: string, gender: string, city:string, birthday:string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform) {
    this.user = {photoURL: "",name: "heyxuxiaoting",gender:"女",city:"杭州",birthday:"1995年6月12日"};
  }

  ionViewWillEnter() {
    this.getUserData();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  getUserData () {

  }
}
