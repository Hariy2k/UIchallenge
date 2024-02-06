import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
