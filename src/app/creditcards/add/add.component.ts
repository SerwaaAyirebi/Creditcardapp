import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  subscription: any;
// addCreditCardForm: FormGroup<any>;

  constructor(private creditcardsService:CreditcardsService,
    private router: Router) {

    }


  newCreditCard: CreditCard = {
    id: 1,
    name: "",
    description: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedCreditScore: "100-200",
    annualFee: 12,
    termsAndConditions: "Terms and conditions",
    cardname: '',
    bankName: '',
    introOffer: 0,
    numberOfApplications: 0,
    createdDate: '',
    updatedDate: ''
  }


  saveCreditCard(){
    console.log("Form Submitted");
    this.creditcardsService.createCreditcard(this.newCreditCard).subscribe(data => {
      alert ("Credit card added");
      this.router.navigate(['creditcards']);
    })
  }
  
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
