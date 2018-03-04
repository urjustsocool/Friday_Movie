import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";

@IonicPage()
@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage {

  constructor(public navCtrl: NavController, public commentsProvider:CommentsProvider) {
    this.commentsProvider.getHotests();
  }
  openDetailPage(){
    console.log("open detail page");
  }
  timestampToDate(timestamp: number) {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    return Y + M + D;
  }
}
