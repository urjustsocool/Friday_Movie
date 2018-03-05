import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ActionSheetController, ToastController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  editUserNamePage = 'EditUsernamePage';
  user: any = {photoUrl: ''};
  minDate = new Date(2105, 6, 1);
  maxDate = new Date(2015, 6, 31);

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public userProvider: UserProvider, public camera: Camera, public fileTransfer: FileTransfer) {
  }

  ionViewWillEnter() {
    this.userProvider.getUserPro().then((res: { code: number, message: string, results: {} }) => {
      this.user = res.results;
      this.user.photoUrl = this.user.photoUrl === "暂无" ? "../../assets/imgs/logo.png" : this.user.photoUrl;
      let birthday = new Date(this.user.birthday);
      this.user.birthday = this.dateFormat("yyyy-MM-dd",birthday);
    });
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500, dismissOnPageChange: true});
    toast.present().then(value => {
      return value;
    });
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  save() {
    let user = this.user;
    let params = {
      photoUrl: user.photoUrl,
      nickName: user.nickName,
      gender: user.gender,
      city: user.city,
      birthday: new Date(user.birthday).getTime(),
      introduction: user.introduction
    }
    console.log(params);
    this.userProvider.updateUser(params).then((res: { code: number, msg: string, result: {} }) => {
      if (res.code === 0) {
        this.userProvider.getUserPro().then((res: { code: number, message: string, results: {} }) => {
          this.user = res.results;
          this.user.photoUrl = this.user.photoUrl === "暂无" ? "../../assets/imgs/logo.png" : this.user.photoUrl;
          let birthday = new Date(this.user.birthday);
          this.user.birthday = this.dateFormat("yyyy-MM-dd",birthday);
        });
        this.openPage("AccountPage");
      }
    })
  }

  presentChangeAvatarActionSheet() {
    if (!this.platform.is('cordova')) {
      this.presentToast('该平台更换头像功能暂不支持');
    } else {
      let changeAvatarActionSheet = this.actionSheetCtrl.create({
        title: '更换头像', buttons: [{
          text: '相册', handler: () => {
            this.getPictureAndUpload(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: '拍照', handler: () => {
            this.getPictureAndUpload(this.camera.PictureSourceType.CAMERA);
          }
        }, {text: '取消', role: 'cancel'}]
      });
      changeAvatarActionSheet.present().then(value => {
        return value;
      });
    }
  }

  getPictureAndUpload(sourceType: number) {
    const cameraOptions: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      cameraDirection: this.camera.Direction.BACK
    };

    this.camera.getPicture(cameraOptions).then(image => {
      this.onUploadPicture(image);
    }, error => {
      console.log(error);
    });
  }

  onUploadPicture(fileURI: string) {
    const fileTransferObject: FileTransferObject = this.fileTransfer.create();

    const fileUploadOptions: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'avatar.jpg',
      httpMethod: 'POST',
      mimeType: 'image/jpeg',
      params: {},
      chunkedMode: true,
      headers: {'Content-Type': 'multipart/form-data'}
    };

    let url: string = '/api/upload?smfile=' + fileURI;

    fileTransferObject.upload(fileURI, url, fileUploadOptions).then(data => {
      this.user.photoUrl = JSON.parse(data["response"])["data"]["url"];
    }, error => {
      console.log(error);
    });
  }
  dateFormat(fmt,date) {
    var o = {
      "M+" : date.getMonth()+1,                 //月份
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
      if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
  }
}
