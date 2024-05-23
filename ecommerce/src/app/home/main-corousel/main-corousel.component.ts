import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-corousel',
  templateUrl: './main-corousel.component.html',
})
export class MainCorouselComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;

  ngOnInit() {
    this.carouselData = [
      { Path: 'assets/images/slider-1.jpg', caption: 'Image1' },
      { Path: 'assets/images/slider-2.jpg', caption: 'Image2' },
      { Path: 'assets/images/slider-3.jpg', caption: 'Image3' },
    ];
    this.autoPlay();
  }

  nextSlide() {
    this.currentSlide = this.currentSlide + 1;
    if (this.currentSlide >= this.carouselData.length) {
      this.currentSlide = 0;
    }
  }

  autoPlay() {
    setInterval(() => this.nextSlide(), 2000);
  }
}
 