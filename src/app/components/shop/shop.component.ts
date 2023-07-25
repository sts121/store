import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { FilterService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/interfaces/product.interface';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  dv: DataView;
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey: string;

  selectedProduct: Product;

  isSelectedProduct: boolean;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private filterService: FilterService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.dv = new DataView(
      this.el,
      this.cd,
      this.filterService,
      this.primengConfig
    );
    this.isSelectedProduct = false;
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;

    this.products = [
      {
        id: '1',
        name: 'Samsung Galaxy S21 Ultra',
        description: '6.8", 5G, 12GB RAM, 256GB ROM',
        price: 1199.99,
        quantity: 50,
        category: 'Electronics',
        image:
          'https://www.gizmochina.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-5G-1.jpg',
        rating: 4.5,
      },
      {
        id: '2',
        name: 'Sony WH-1000XM4',
        description:
          'Wireless Over-Ear Headphones with Mic and Alexa Voice Control',
        price: 348.0,
        quantity: 20,
        category: 'Electronics',
        image:
          'https://www.sony.com/image/0ff1c2f94d38e16c2b6e50fc8c33f92a?fmt=pjpeg&wid=330&hei=330&bgcolor=F1F5F9&bgc=F1F5F9',
        rating: 4.8,
      },
      {
        id: '3',
        name: 'Apple MacBook Pro',
        description:
          'M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
        price: 1299.0,
        quantity: 10,
        category: 'Electronics',
        image:
          'https://www.apple.com/v/macbook-pro-13/g/images/overview/hero__dkvemjqc7jq6_large_2x.jpg',
        rating: 4.7,
      },
      {
        id: '4',
        name: 'Nike Air Max 2090',
        description: 'Men’s shoe, cool design and comfortable fit',
        price: 150.0,
        quantity: 30,
        category: 'Footwear',
        image:
          'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b8bba07a-1cb3-44d3-b79e-62d3a087ee22/air-max-2090-shoe-zW0ks6.jpg',
        rating: 4.3,
      },
      {
        id: '5',
        name: 'Levi’s 501 Original Fit Jeans',
        description: 'Classic straight leg, comfortable and durable',
        price: 79.5,
        quantity: 15,
        category: 'Clothing',
        image:
          'https://www.levi.com/isd/content/dam/levi/products/00501-0188-front.jpg.transform/product-page-tile_mobile/image.jpg',
        rating: 4.5,
      },
      {
        id: '6',
        name: 'Bose SoundLink Revolve',
        description: 'Portable Bluetooth speaker with 360 degree sound',
        price: 199.0,
        quantity: 25,
        category: 'Electronics',
        image:
          'https://www.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_plus_silver/product_silo_images/soundlink_revolve_plus_silver_EC_1_1x1.png',
        rating: 4.6,
      },
    ];
  }
  viewItemDetailsClicked(product: Product) {
    console.log('parent clicked')

    this.selectedProduct= product;
    this.isSelectedProduct = true;
  }
  closeModalClicked(){
    console.log('parent closeclicked');

    this.isSelectedProduct = false;
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
