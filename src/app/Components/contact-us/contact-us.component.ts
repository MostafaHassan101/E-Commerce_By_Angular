import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  GetBirthDate(birthDate: any){
    return birthDate;
  }
  ConvertCredit(credit: any){
    return credit;
  }
}
