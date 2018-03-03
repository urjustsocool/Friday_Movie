import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MoviesProvider {
  hotMovies:any[];
  goodMovies:any[];
  newMovies:any[];
  hotMoviesTotal:number;
  hasNext:any = {"hot":true,"coming":true};
  constructor(public http: HttpClient){

  }
  getMovies() {
    //https://developers.douban.com/wiki/?title=movie_v2
    let hotMoviesUrl: string = "/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a";
    this.http.get(hotMoviesUrl).subscribe(data => {
      this.hotMovies = data["subjects"];
      console.log("hot movies", this.hotMovies);
    });
    let goodMoviesUrl: string = "/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a";
    this.http.get(goodMoviesUrl).subscribe(data => {
      this.goodMovies = data["subjects"];
    });
    let newMoviesUrl: string = "/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a";
    this.http.get(newMoviesUrl).subscribe(data => {
      this.newMovies = data["subjects"]
    });
  }
}
