import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string ): string {

    if(value.length != 16){
      return "Invalid Credit Card";
    }
    else{
      let creditCard = value.substring(0, 4);
      let creditCard1 = value.substring(4, 8);
      let creditCard2 = value.substring(8, 12);
      let creditCard3 = value.substring(12, 16);
      return `${creditCard}-${creditCard1}-${creditCard2}-${creditCard3}`;
    }
  }

}
