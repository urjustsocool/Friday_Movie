import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  settingPage = 'SettingPage';
  constructor(public navCtrl: NavController) {

  }
  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }
}
