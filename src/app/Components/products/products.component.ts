import { Component, Input, OnInit, OnChanges, Output, EventEmitter, ViewChild, SimpleChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICart } from 'src/app/Models/icart';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';
import { OrderParentComponent } from '../order-parent/order-parent.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

ClientName: string="Mostafa Hassan";

// @Input() selectedCategory: number= 0;
ProductList: Iproduct[] = [];
// ProductList: Observable<Iproduct[]> = new Observable<Iproduct[]>();
selectedCategory : number = 0;
categoryName : string = "";
  constructor(private productApiService: ProductApiService, private router :Router, private loc: Location) { }
  ngOnChanges(): void {
    // this.ProductList = this.productService.GetProductsByCategoryId(this.selectedCategory);
    this.productApiService.getProductByCategory(this.categoryName).subscribe(data => {this.ProductList = data;})
  }

  ngOnInit(): void {
    // this.ProductList = this.productService.GetProductsByCategoryId(this.selectedCategory);
    this.productApiService.getAllProducts().subscribe(data => {this.ProductList = data;})
    console.log(this.ProductList);
  }

  GetProductDetails(prodId: number){
    this.router.navigate(['product-details', prodId]);
    window.scrollTo(0,0);
  }

//   // a.	Use @HostListner to handle that on hover increases the shadow, and on mouse out back to the original shadow.

//   // @HostListener('mouseenter') onMouseEnter() {
//   //   this.shadow = '0 0 11px rgba(33,33,33,.2)';
//   // }

// //   b.	Make your directive receives BGColor parameter, and sets the background of card with the given color
// // i)	You will need to use ngOnChanges, Why?
// // ii)	What is the component life cycle in Angular?
// // iii)	What is the difference between executing the code in the class constructor and in ngOnInit?

//   // @Input() bgColor: string = "white";
//   // @Input() shadow: string = "0 0 11px rgba(33,33,33,.2)";
//   // @Input() borderRadius: string = "10px";
//   // @Input() padding: string = "10px";

//   // @HostListener('mouseover',) onMouseOver() {
//   //   this.shadow = '0 0 11px rgba(33,33,33,.2)';
//   // }







// //   ngOnInit(): void {
// //     // this.filterProductsByCategory();
// //   }
// //   ngOnChanges(): void {
// //     // this.filterProductsByCategory();
// //   }

  DecQuantity(product: Iproduct){
    if(product.stock > 0)
      product.stock--;
    }

ThkMsg: boolean = false;
IsPurshased(){
  this.ThkMsg = !this.ThkMsg;
}

// // filterProductsByCategory(){
// //   if(this.selectedCategory == 0)
// //     this.filterProducts = this.productList;
// //   else
// //   this.filterProducts = this.productList.filter(p => p.CategoryId == this.selectedCategory as number);
// // }

  maxValue:String=""
  len: number = 0;
  MaxInput(event: any, product: Iproduct){
    if(isNaN(event.key.valueOf()))
       event.preventDefault();
    else
          this.maxValue +=event.key.valueOf();
      if(Number(this.maxValue) > product.stock)
        event.preventDefault();

      if(event.key == "Backspace")
      {
        this.maxValue = this.maxValue.slice(0, product.stock.toString().length-1);
        event.target.value = this.maxValue;
      }
  }

  DeleteProd(id :number){
    this.productApiService.deleteProduct(id).subscribe(() => {
      // this.productsApi = this.productApiService.filter(product => product.id !== id);
      this.loc.historyGo(0);
    });
  }

// // @Output() ProductToCartEvent: EventEmitter<ICart> = new EventEmitter<ICart>();
// // @Output() CountOfProductsEvent: EventEmitter<number> = new EventEmitter<number>();

@Output() ProductToCartEvent = new EventEmitter<ICart>();

// // // private Cart?: ICart;

AddToCart(_product: Iproduct, _quantity: any){
  this.ProductToCartEvent.emit({productInCart: _product, count: Number(_quantity.value)});
}


// DecreaseQuantity(product: Iproduct, _quantity: number){
//   alert("DecreaseQuantity "+_quantity);
//   this.ProductList[product.Id].Quantity = this.ProductList.find(p => p.Id == product.Id)!.Quantity -= _quantity;
//   // product.Quantity -= _quantity;
// }

}
