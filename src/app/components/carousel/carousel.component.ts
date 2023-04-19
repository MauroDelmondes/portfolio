import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit {
  slides: any[] = new Array(2).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      title: 'HackaMT Code Competition',
      subtitle:
        '3rd Place Team out of 5 teams, at HackaMT Code Competition (2021)',
    };
    this.slides[1] = {
      id: 1,
      title: 'Centro Universitário Várzea Grande (UNIVAG) Code Competition',
      subtitle:
        '3rd Place Team, out of 8 teams, at University Center of Várzea Grande Code Competition (2022)',
    };
  }
}
