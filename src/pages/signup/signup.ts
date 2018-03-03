import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup: { name: string, password: string, verification: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.signup = {name: '', password: '', verification: ''};
  }

  onSignup() {
    if (this.signup.name === '' || this.signup.password === '' || this.signup.verification === '') {
      this.presentToast('输入信息不能为空');
    } else if (this.signup.password !== this.signup.verification) {
      this.presentToast('两次输入的密码不一致');
    } else if (this.signup.password.length < 6 || this.signup.password.length > 32) {
      this.presentToast('密码长度必须在 6 到 32 位之间');
    } else {
      this.presentConfirmToast("注册完成，请登录");
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  presentConfirmToast(message: string) {
    let toast = this.toastCtrl.create({message: message, showCloseButton: true, closeButtonText: "确认"});
    toast.onDidDismiss(() => {
      this.navCtrl.pop();
    });
    toast.present().then(value => {
      return value;
    });
  }
}
