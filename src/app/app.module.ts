import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { AsideComponent } from './Components/aside/aside.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BorderStyleDirective } from './Directive/border-style.directive';
import { DOBPipe } from './Pipes/dob.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './Components/admin/add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AsideComponent,
    CartComponent,
    OrderParentComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainComponent,
    HomeComponent,
    ProductDetailsComponent,
    BorderStyleDirective,
    DOBPipe,
    CreditCardPipe,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    // Add HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
