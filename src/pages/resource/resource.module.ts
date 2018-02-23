import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ResourcePage} from "./resource";

@NgModule({
  declarations:[
    ResourcePage,
  ],
  imports:[
    IonicPageModule.forChild(ResourcePage),
  ]
})
export class ResourcePageModule{

}
