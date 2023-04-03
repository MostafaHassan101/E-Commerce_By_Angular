import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  currentProdId: number = 0;
  product: Iproduct | undefined = undefined;
  constructor(
    // private prodService: ProductService,
    private prodApiService: ProductApiService,
    private activatedRoute: ActivatedRoute,
    private loc: Location,
    private router: Router
  ){}

  ngOnInit(): void {

    this.currentProdId = this.activatedRoute.snapshot.paramMap.get("id")?
     Number(this.activatedRoute.snapshot.paramMap.get('id')) : 0;
    console.log(this.currentProdId);

  let returnedProduct = this.prodApiService.getProductById(this.currentProdId).subscribe(data => {this.product = data;});

  // if(returnedProduct != undefined){
  //   this.product = returnedProduct;
  // }
  // else{
  //   alert("Product Not Found");
  //   this.loc.back();
  // }
}
BackToContinueShopping(){
  // this.loc.back();
  this.router.navigate(['Products']);
  // history.back();
  history.go(-1);

}

}
