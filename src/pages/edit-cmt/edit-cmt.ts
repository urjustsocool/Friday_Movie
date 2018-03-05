import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";

@IonicPage()
@Component({
  selector: 'page-edit-cmt',
  templateUrl: 'edit-cmt.html',
})
export class EditCmtPage {
  cmt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public commentsProvider: CommentsProvider) {
  }

  ionViewWillEnter() {
    let type = this.navParams.get('type');
    switch (type) {
      case "add":break;
      case "update":this.cmt = this.navParams.get("title");
      default:break;
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  getCmt() {

  }

  publishCmt() {
    // 新增cmt
    if (this.navParams.get("type") === "add") {
      let params = {
        movieId: this.navParams.get("id"),
        movieName: this.navParams.get("title"),
        commentContent: this.cmt
      }
      this.commentsProvider.publish(params).then((res: { code: number }) => {
        if (res.code === 0) {
          this.presentToast("发布成功");
          this.goBack();
        }
      });
    }
    else {
      let params = {
        commentId: this.navParams.get("id"),
        commentContent:this.cmt
      }
      this.commentsProvider.update(params).then((res: { code: number }) => {
        if (res.code === 0) {
          this.presentToast("更新成功");
          this.goBack();
        }
      })
    }
  }

  goBack() {
    this.navCtrl.pop();
  }
}
