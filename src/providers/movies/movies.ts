import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MoviesProvider {
  hotMovies:any[];
  hotMoviesTotal:number;
  hasNext:any = {"hot":true,"coming":true};
  constructor(public http: HttpClient){

  }
  getMovies() {
    let hotMoviesUrl: string = "/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a";
    this.http.get(hotMoviesUrl).subscribe(data => {
      this.hotMovies = data["entries"];
      console.log("hot movies", this.hotMovies);
    });
  }
}
