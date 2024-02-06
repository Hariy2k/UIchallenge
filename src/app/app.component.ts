import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ubupbox';

  imgSrc!: string;

  constructor() {
    this.updateImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImage();
  }

  private updateImage() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      this.imgSrc = "../assets/topbar-mobile.png";
    } else if (screenWidth >= 426 && screenWidth <= 767) {
      this.imgSrc = "../assets/topbar-tablet.png";
    } else if (screenWidth >= 768) {
      this.imgSrc = "../assets/topbar-desktop.png";
    }
  }
}
