import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signupPage = 'SignupPage';

  isClearTextPassword: boolean;

  info: { name: string, password: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.isClearTextPassword = false;
    this.info = {name: '', password: ''};
  }

  ngAfterViewInit() {
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }
  toggleClearTextPassword() {
    this.isClearTextPassword ? this.isClearTextPassword = false : this.isClearTextPassword = true;
  }

  onLogin() {
    if (this.info.name === '' || this.info.password === '') {
      this.presentToast('输入信息不能为空');
    } else {

    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }
}
