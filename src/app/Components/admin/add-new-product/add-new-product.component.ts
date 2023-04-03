import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  constructor(private product: ProductApiService , private router:Router ) { }

  prd: Iproduct = {} as Iproduct;

  addNewProduct(){
  // addNewProduct(){
  //   let newProduct: Iproduct = {
  //     id: 110,
  //     title: "Samsung Universe 9",
  //     description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  //     price: 8000,
  //     discountPercentage: 10,
  //     rating: 4.09,
  //     stock: 36,
  //     brand: "Samsung",
  //     category: "smartphones",
  //     thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  //     images: ["https://i.dummyjson.com/data/products/3/1.jpg"]
  //   }
    this.product.addProduct(this.prd).subscribe(
      {
        next: (data) => {console.log(data)},
        error: (err) => {console.log(err)},
        complete: () => {console.log('Done')
        this.router.navigate(['/Home'])
      }
      }
    )
  }
}
