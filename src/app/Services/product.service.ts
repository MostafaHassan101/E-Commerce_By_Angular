import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Models/discount-offers';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // productList: Iproduct[];

  // constructor(){
  //   this.productList = [{Id:1, Name:"Laptop", Price:8000, Quantity:2, Img:"assets/img/N53367788A_2.avif",Discount:DiscountOffers.Discount_10, CategoryId:1},
  //   {Id:44, Name:"Canon", Price:8000, Quantity:2, Img:"assets/img/N33956023A_1.avif", Discount:DiscountOffers.Discount_15,CategoryId:2},
  //   {Id:3, Name:"playstation 5", Price:25000, Quantity:1, Img:"assets/img/N40633048A_1.avif", Discount:DiscountOffers.Discount_20,CategoryId:8},
  //   {Id:5, Name:"Earbuds", Price:6999, Quantity:5, Img:"assets/img/N51445769A_1.avif", Discount:DiscountOffers.NoDiscount, CategoryId:4},
  //   {Id:9, Name:"REDRAGON K552", Price:1000, Quantity:4, Img:"assets/img/N51501122A_1.avif", Discount:DiscountOffers.NoDiscount, CategoryId:5},
  //   {Id:13, Name:"Smart LED TV ", Price:8000, Quantity:6, Img:"assets/img/N52923916A_1.avif", Discount:DiscountOffers.Discount_15, CategoryId:6},
  //   {Id:15, Name:"Xiaomi Smart", Price:1699, Quantity:3, Img:"assets/img/N53326895A_1.avif", Discount:DiscountOffers.Discount_10, CategoryId:7},
  //   {Id:190, Name:"Samsung Galaxy", Price:8000, Quantity:1, Img:"assets/img/N53363055A_1.avif", Discount:DiscountOffers.NoDiscount, CategoryId:3},
  //   {Id:190, Name:"Canon 2", Price:8000, Quantity:1, Img:"assets/img/N33956023A_1.avif", Discount:DiscountOffers.NoDiscount, CategoryId:3}];
  // }

  // GetAllProducts(): Iproduct[]{
  //   return this.productList;
  // }

  // GetProductById(id: number): Iproduct | undefined{
  //   return this.productList.find(p=>p.Id == id);
  // }

  // GetProductsByCategoryId(id: number): Iproduct[]{
  //   if(id == 0)
  //     return this.productList;
  //   return this.productList.filter(p=>p.CategoryId == id);
  // }

}
