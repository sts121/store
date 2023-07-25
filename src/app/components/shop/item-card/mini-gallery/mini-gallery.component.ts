import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-gallery',
  templateUrl: './mini-gallery.component.html',
  styleUrls: ['./mini-gallery.component.scss'],
})
export class MiniGalleryComponent {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.images = [
      {
        previewImageSrc: '../../../../../assets/gallery/shoes1_1.webp',
        thumbnailImageSrc: '../../../../../assets/gallery/shoes1_1.webp',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        previewImageSrc: '../../../../../assets/gallery/shoes1_2.webp',
        thumbnailImageSrc: '../../../../../assets/gallery/shoes1_2.webp',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
    ];
  }
}
