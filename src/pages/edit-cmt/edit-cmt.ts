import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-cmt',
  templateUrl: 'edit-cmt.html',
})
export class EditCmtPage {
  cmt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    console.log(this.navParams.get('type'));
    this.getCmt();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  getCmt () {

  }

  publishCmt () {
    this.goBack();
  }

  goBack () {
    this.navCtrl.pop();
  }
}
