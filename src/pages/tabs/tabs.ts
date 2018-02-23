import { Component } from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage';
  hotRoot = 'HotPage';
  resourceRoot = 'ResourcePage';
  accountRoot = 'AccountPage';

  constructor(public navCtrl:NavController) {

  }
}
