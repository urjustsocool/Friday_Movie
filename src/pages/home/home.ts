import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides} from "ionic-angular";
import {MoviesProvider} from "../../providers/movies/movies";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('outerSlides') outerSlides: Slides;
  movieDetailPage = "MovieDetailPage";
  type:string = 'hot';
  constructor(public navCtrl: NavController,public moviesProvider:MoviesProvider) {
    this.moviesProvider.getMovies();
  }
  goToSlide(index:number) {
    this.outerSlides.slideTo(index);
  }
  slideToAnother() {
    let index = this.outerSlides.getActiveIndex();
    if (index === 0) {
      this.type = "hot";
    } else if (index === 1) {
      this.type = "good";
    }else if (index === 2) {
      this.type = "new";
    }
  }
  doRefresh() {
    setTimeout(()=>{
      console.log("do refresh");
    },1500);
  }
  openMovieDetail(){
    this.navCtrl.push(this.movieDetailPage).then(value => {
      return value;
    });
  }
}
