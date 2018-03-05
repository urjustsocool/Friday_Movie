import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CommentsProvider {
  hotestComments: any [];
  myComment = {};
  otherComments = [];
  myAllComments = [];

  constructor(public http: HttpClient) {

  }

  // 获取热点评论
  getHotests() {
    let hotCommentsUrl: string = "/movie/comment/hot?pageIndex=1&pageSize=10";
    this.http.get(hotCommentsUrl).subscribe(data => {
      this.hotestComments = data["results"].hot;
      console.log("hot movies", this.hotestComments);
    });
  }

  publish(params) {
    return this.http.post("/movie/comment/" + params.movieId, params).toPromise();
  }

  update(params) {
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post("/movie/comment/" + params.commentId + "/update", this.obj2query(params), {headers}).toPromise();
  }

  // 获取某一电影的评论
  getCmtsByMovieId(id) {
    this.http.get("/movie/comment/" + id).subscribe((res: { code:number,results: { myComment: {}, otherComments: [{}] } }) => {
      if (res.code == 0) {
        this.myComment = res.results.myComment;
        this.otherComments = res.results.otherComments;
      }
      else {
        this.myComment = null;
        this.otherComments= null;
      }
    });
  }

  // 获取我的所有电影评论-按时间排序
  getAllMine() {
    this.http.get("/movie/comment/my").subscribe((res: { results: [{}] }) => {
      this.myAllComments = res.results;
      this.myAllComments.forEach(item => {
        this.http.get("/v2/movie/subject/" + item.movieId + "?apikey=0df993c66c0c636e29ecbb5344252a4a").subscribe((data: { images: { medium: '' }, pubdates: string[] }) => {
          item.image = this.processImgUrl(data.images.medium);
          item.pubdate = data.pubdates[0];
        })
      })
      console.log(this.myAllComments);
    })
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

  processImgUrl(val: string) {
    //Special process Failed to load resource: the server responded with a status of 403 (Forbidden) for loading img7 URL
    return val.replace('img7', 'img3')
  }

  vote(id) {
    return this.http.post("/movie/comment/vote/" + id, {}).toPromise();
  }
}
