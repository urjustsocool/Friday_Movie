import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EditCmtPage} from './edit-cmt';

@NgModule({
  declarations: [
    EditCmtPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCmtPage),
  ],
})
export class EditCmtPageModule {
}
