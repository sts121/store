import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [];
  tabView: string = 'home';

  viewTab(tabName: string) {
    this.tabView = tabName
  }

  // ngOnInit() {
  //   this.items = [
  //     {
  //       label: 'Home',
  //       icon: 'pi pi-fw pi-home',
  //       command: () => (this.tabView = 'home'),
  //     },
  //     {
  //       label: 'Shop',
  //       icon: 'pi pi-fw pi-shopping-bag',
  //       command: () => (this.tabView = 'shop'),
  //     },
  //   ];
  // }
}
