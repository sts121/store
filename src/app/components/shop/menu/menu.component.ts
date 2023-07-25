import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  dockItems: MenuItem[];

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Finder',
              icon: "https://img.icons8.com/nolan/96/skirt.png"
          },
          {
              label: 'App Store',
              icon: "https://img.icons8.com/nolan/96/shirt.png"
          },
          {
              label: 'Photos',
              icon: "https://img.icons8.com/nolan/96/babys-room.png"
          },
          {
              label: 'Trash',
              icon: "https://img.icons8.com/nolan/96/home.png"
          }
      ];

  }
}
