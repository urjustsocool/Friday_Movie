import {Component, ViewChild} from '@angular/core';
import {Content, InfiniteScroll, IonicPage, NavController, Refresher, ToastController} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";
import {CookieService} from 'angular2-cookie/services/cookies.service';

@IonicPage()
@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage {
  @ViewChild(Content) content: Content;
  pageIndex:number = 0;
  pageSize:number = 30;
  hasLoggedIn:boolean;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public commentsProvider:CommentsProvider,public cookieService: CookieService) {
    this.getLoginState();
  }
  ionViewWillEnter () {
    this.commentsProvider.getHotests(this.pageIndex,this.pageSize);
  }
  timestampToDate(timestamp: number) {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    return Y + M + D;
  }
  doRefresh(refresher:Refresher) {
    console.log("do refresh");
    setTimeout(()=>{
      this.pageIndex = 0;
      this.commentsProvider.getHotests(this.pageIndex,this.pageSize);
      refresher.complete();
    },1500);
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    console.log("do infinite");
    setTimeout(() => {
      this.pageIndex += 1;
      this.commentsProvider.getHotests(this.pageIndex, this.pageSize);
      infiniteScroll.complete();
    }, 1000);
  }
  scrollToTop() {
    this.content.scrollToTop();
  }
  vote (id) {
    if(this.hasLoggedIn) {
      this.commentsProvider.vote(id).then((res: { code: number }) => {
        if (res.code === 0) {
          this.commentsProvider.getHotests(this.pageIndex, this.pageSize);
        }
      })
    }
    else {
      this.presentToast("未登录，请先登录");
    }
  }
  getLoginState() {
    if (this.cookieService.get("token")) {
      this.hasLoggedIn = true;
    }
    else {
      this.hasLoggedIn = false;
    }
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }
}
