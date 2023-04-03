import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ICart } from 'src/app/Models/icart';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements AfterViewInit{

// categories: ICategory[];
// selectedCategory: number= 0;
// constructor() {
//   this.categories = [{Id:1, Name:"Laptop"},
//   {Id:2, Name:"Camera"},
//   {Id:3, Name:"Smartphone"},
//   {Id:4, Name:"Earbuds"},
//   {Id:5, Name:"Keyboard"},
//   {Id:6, Name:"TV"}];
// }

//  Cart:ICart[] = [];
// GetProduct(product: ICart){
//     let found = this.Cart.find(x => x.productInCart.Id == product.productInCart.Id);
//     if(found == undefined) // not found
//     {
//         if(product.count <= product.productInCart.Quantity && product.count > 0)
//         this.Cart.push(product);
//     }
//     else
//     {
//         if(found.count + product.count <= product.productInCart.Quantity)
//         found.count += product.count;
//     }
// }
// Delete(product: ICart){
//   this.Cart = this.Cart.filter(x => x.productInCart.Id != product.productInCart.Id);
// }
// // CheckOut(product: ICart){

// // }
// TotalPrice(): number{
//   let total = 0;
//   for(let i = 0; i < this.Cart.length; i++)
//   {
//     total += this.Cart[i].productInCart.Price * this.Cart[i].count;
//   }
//   return total;
// }

// @ViewChild("decreasequantity") decreaseQuantity?: ProductsComponent;
// @ViewChild("test") Test?:ElementRef;
// ngAfterViewInit(): void{
//     // alert(this.decreaseQuantity?.ThkMsg);
// }

ngAfterViewInit(): void {
  // this.Test!.nativeElement.innerHTML= "Hello World";
  // this.Test!.nativeElement.style.color = "red";
  // this.Test!.nativeElement.style.fontSize = "50px";
  // this.Test!.nativeElement.style.fontWeight = "bold";
  // this.Test!.nativeElement.style.textAlign = "center";
  // this.Test!.nativeElement.style.backgroundColor = "yellow";
  // this.Test!.nativeElement.style.border = "2px solid black";
  // this.Test!.nativeElement.style.borderRadius = "50px";
  // this.Test!.nativeElement.style.padding = "10px";
  }

// CheckOut(product: ICart){
//     // alert(this.decreasequantity?.ThkMsg);
//   let found = this.Cart.find(x => x.productInCart.Id == product.productInCart.Id);
//   if(found != undefined)
//   {
//     found.productInCart.Quantity -= found.count;
//     // this.decreasequantity!.DecreaseQuantity(found.productInCart, found.count);
//     this.Delete(product);
//         }
//     }
}
