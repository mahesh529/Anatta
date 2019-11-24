import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRecommandationsComponent } from './components/product-recommandations/product-recommandations.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductRecommandationsComponent,
    ProductFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
