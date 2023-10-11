import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SecondTitleComponent } from './components/second-title/second-title.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    CardComponent,
    FooterComponent,
    CategoriesComponent,
    SecondTitleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
