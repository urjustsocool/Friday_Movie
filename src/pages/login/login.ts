import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import { CookieService } from 'angular2-cookie/services/cookies.service';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signupPage = 'SignupPage';
  accountPage = 'AccountPage';

  isClearTextPassword: boolean;

  info: { accountId: string, password: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userProvider:UserProvider,private _cookieService:CookieService) {
    this.isClearTextPassword = false;
    this.info = {accountId: '', password: ''};
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
    if (this.info.accountId === '' || this.info.password === '') {
      this.presentToast('输入信息不能为空');
    } else {
      this.userProvider.login(this.info).then((res:{code:number,message:string})=>{
        if(res.code === 0){
          this.presentToast("登录成功");
          // 存cookie
          // this._cookieService.put("accountId",this.info.accountId);
          // 跳转
          this.openPage(this.accountPage);
        }
        else {
          this.presentToast(res.message);
        }
      })
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }
}
