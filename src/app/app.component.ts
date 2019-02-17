import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  whatsappImages: NgxGalleryImage[];
  tweeterImage: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        thumbnailsColumns: 3,
        image: false,
        thumbnailsRemainingCount: true,
        height: '100px',
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: 'fa fa-arrow-circle-o-left',
        arrowNextIcon: 'fa fa-arrow-circle-o-right',
        closeIcon: 'fa fa-window-close',
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true
      },
    ];

    this.whatsappImages = [
      {
        small: 'assets/img/context_diagram.png',
        medium: 'assets/img/context_diagram.png',
        big: 'assets/img/context_diagram.png',
        description: "Context diagram"
      },
      {
        small: 'assets/img/dfd.png',
        medium: 'assets/img/dfd.png',
        big: 'assets/img/dfd.png',
        description: "DFD"
      },
      {
        small: 'assets/img/deployment_diagram.png',
        medium: 'assets/img/deployment_diagram.png',
        big: 'assets/img/deployment_diagram.png',
        description: "Deployment diagram"
      }
    ];

    this.tweeterImage = [
      {
        small: 'assets/img/tmt.png',
        medium: 'assets/img/tmt.png',
        big: 'assets/img/tmt.png',
        description: "De TMT geeft aan dat er bij al het contact met het backend proces risico is op Cross Site Scripting. "
      },
    ];

  }

}
