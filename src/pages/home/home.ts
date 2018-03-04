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
  openMovieDetail(id){
    this.navCtrl.push(this.movieDetailPage,{id}).then(value => {
      return value;
    });
  }
  processImgUrl(val:string) {
    //Special process Failed to load resource: the server responded with a status of 403 (Forbidden) for loading img7 URL
    return val.replace('img7','img3')
  }
}
