import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  httpHeader = {};

  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      })
    }
   }

  // ApiUrl = 'http://localhost:3000/products';

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}/products`);
  }

  getProductById(id:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.ApiUrl}/products/${id}`);
  }


  addProduct(product:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.ApiUrl}/products`,
    product, this.httpHeader 
    );
  }

  deleteProduct(id: number): Observable<{}> {
    const url = `${environment.ApiUrl}/products/${id}`;
    return this.httpClient.delete(url);
  }


  getProductByCategory(categoryId:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}/products?catId=${categoryId}`);
  }

  getProductByBrand(brand:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}?brand=${brand}`);
  }

  getProductByPrice(price:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}?price=${price}`);
  }

  getProductByRating(rating:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}?rating=${rating}`);
  }

  getProductByDiscount(discount:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}?discount=${discount}`);
  }

  getProductByTitle(title:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.ApiUrl}?title=${title}`);
  }

  // addProduct(product:Iproduct):Observable<Iproduct>{
  //   return this.httpClient.post<Iproduct>(this.ApiUrl,product);
  // }
}
