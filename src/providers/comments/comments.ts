import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CommentsProvider {
  hotestComments:any [];
  constructor(public http: HttpClient){

  }
  getHotests() {
    /*let hotCommentsUrl: string = "/api/!****";
    this.http.get(hotCommentsUrl).subscribe(data => {
      this.hotestComments = data["list"];
      console.log("hot movies", this.hotestComments);
    });*/
    this.hotestComments = [
      {movie:'解忧杂货店',
        article:'僻静的街道旁有一家叫 浪矢的杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答…… 杂货店的老板是',
        user:'团团',
        time:'2018.01.01',
        view:'43',
        comments:'32',
        good:'23'
      },{movie:'解忧杂货店',
        article:'僻静的街道旁有一家叫 浪矢的杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答…… 杂货店的老板是',
        user:'团团',
        time:'2018.01.01',
        view:'43',
        comments:'32',
        good:'23'
      },{movie:'解忧杂货店',
        article:'僻静的街道旁有一家叫 浪矢的杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答…… 杂货店的老板是',
        user:'团团',
        time:'2018.01.01',
        view:'43',
        comments:'32',
        good:'23'
      }
    ];
  }
}
