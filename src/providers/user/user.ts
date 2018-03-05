import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import md5 from "md5";

@Injectable()
export class UserProvider {
  user:any = {photoUrl:''};
  constructor(public http: HttpClient) {

  }

  login(data) {
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    let params = {};
    for (let i in data) {
      if (i === "password") {
        params[i] = md5(data[i]);
      }
      else {
        params[i] = data[i];
      }
    }
    return this.http.post("/user/login", this.obj2query(params), {headers}).toPromise();
  }

  signup(data) {
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    let params = {};
    for (let i in data) {
      if (i === "password") {
        params[i] = md5(data[i]);
      }
      else {
        params[i] = data[i];
      }
    }
    return this.http.post("/user/register", this.obj2query(params), {headers}).toPromise();
  }

  getUser() {
    this.http.get("/user/account").subscribe((res:{code:number,message:string,results:{}})=>{
      this.user = res.results;
      console.log(this.user);
      console.log("the photoURL before: "+this.user.photoUrl);
      this.user.photoUrl = this.user.photoUrl === "暂无"? "../../assets/imgs/logo.png":this.user.photoUrl;
      console.log("the photoURL after: "+this.user.photoUrl);
    })
  }
  updateUser (user) {
    return this.http.post("/user/account",user).toPromise();
  }
  getUserPro () {
    return this.http.get("/user/account").toPromise();
  }
  obj2query(data) {
    var query = "";
    if (!data) return query;
    for (var i in data) {
      query += `${i}=${encodeURIComponent(data[i])}&`;
    }
    // remove last `&`;
    return query.replace(/&$/, "");
  }
}
