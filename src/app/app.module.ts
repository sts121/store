import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StyleClassModule} from 'primeng/styleclass';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { MenuComponent } from './components/shop/menu/menu.component';
import { ItemCardComponent } from './components/shop/item-card/item-card.component';
import { ItemDetailsComponent } from './components/shop/item-card/item-details/item-details.component';
import {GalleriaModule} from 'primeng/galleria';
import { MiniGalleryComponent } from './components/shop/item-card/mini-gallery/mini-gallery.component';
import { DarkModeToggleComponent } from './components/navbar/dark-mode-toggle/dark-mode-toggle.component';
import { ItemModalComponent } from './components/shop/item-modal/item-modal.component';
import {DockModule} from 'primeng/dock';
import { MenuBarComponent } from './components/shop/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    MenuComponent,
    ItemCardComponent,
    ItemDetailsComponent,
    MiniGalleryComponent,
    DarkModeToggleComponent,
    ItemModalComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StyleClassModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    RatingModule,
    RippleModule,
    GalleriaModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
