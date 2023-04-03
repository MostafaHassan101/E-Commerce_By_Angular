import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddNewProductComponent } from './Components/admin/add-new-product/add-new-product.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
//   v)	In all links add RouterLinkActive

//------->>>>>> first-match wins strategy <<<<<<-----------------
  { path: '', component: MainComponent, title: 'Home',
  children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full', title: 'Home'},
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'Order-Parent', component: OrderParentComponent, title: 'Order-Parent' },
  { path: 'Products', component: ProductsComponent, title: 'Products' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details'},
  { path: 'Cart', component: CartComponent, title: 'Cart'},
  { path: 'ContactUs', component: ContactUsComponent, title: 'Contact Us'},
  { path: 'AboutUs', component: AboutUsComponent, title: 'About Us'},
  { path: 'AddProduct', component: AddNewProductComponent, title: 'Admin'}
  ]},
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
