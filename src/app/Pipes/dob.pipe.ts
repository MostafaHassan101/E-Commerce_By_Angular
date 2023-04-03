import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dOB'
})
export class DOBPipe implements PipeTransform {

  transform(value: string): string {
    // get birth date from identity card
    if(value.length != 14){
      return "Invalid Identity Card";
    }
    else{
      // check if the birth date is valid
      let century = value.substring(0, 1);
      let cen = 18;
        for(let i = 0; i <= Number(century); i++){
          if((Number(century) - 1) == i){
            cen += i;
          }
        }
      let birthDate = value.substring(1, 7);
      let year = birthDate.substring(0, 2);
      let month = birthDate.substring(2, 4);
      let day = birthDate.substring(4, 6);
      let birthDateStr = `${cen+year}/${month}/${day}`;
      let todayDate = new Date();
      // const str = '2024-07-21';
      const BOD = new Date(birthDateStr);
      if(BOD > todayDate)
        return "Invalid Birth Date";
        return `${day}-${month}-${cen+year}`;
    }

  }
}
// function getFormatedDate(birthDateStr: string) {
//   throw new Error('Function not implemented.');
// }

