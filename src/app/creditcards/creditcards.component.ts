import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections'; 
import { CreditcardsService } from '../services/creditcards.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { EditComponent } from './edit/edit.component';



const TABLE_DATA: CreditCard[] = [

  { id:1,
    name:"John Doe",
  cardname:"Bank of America - Platinum Card",
  bankName:"Bank of America",
  description:"Bank of America offers customers with variety of options",
  maxCredit: 8000,
  active: true,
  annualFee: 0,
  interestRate: 13.5,
  introOffer: 200,
  recommendedCreditScore: "600-800",
  numberOfApplications: 40,
  createdDate:"28-08-2023",
  updatedDate:"28-08-2023",
  termsAndConditions: "The following conditions are applicable for this card"
},
  {
    id: 2,
    name: "Jane Smith",
    cardname: "Chase Sapphire Preferred",
    bankName: "Chase",
    description: "Chase Sapphire Preferred offers excellent travel rewards and benefits.",
    maxCredit: 25000,
    active: true,
    annualFee: 95,
    interestRate: 16.5,
    introOffer: 750,
    recommendedCreditScore: "700-850",
    numberOfApplications: 150,
    createdDate: "15-07-2023",
    updatedDate: "15-07-2023",
    termsAndConditions: "Must meet certain spending requirements to earn bonus points."
  },
  {
    id: 3,
    name: "Alice Johnson",
    cardname: "American Express Gold Card",
    bankName: "American Express",
    description: "Earn 3x points on dining and 2x on flights with the Amex Gold Card.",
    maxCredit: 18000,
    active: true,
    annualFee: 250,
    interestRate: 18.0,
    introOffer: 300,
    recommendedCreditScore: "700-850",
    numberOfApplications: 300,
    createdDate: "10-06-2023",
    updatedDate: "10-06-2023",
    termsAndConditions: "Sign-up bonus awarded after $2,000 spend within first 3 months."
  },
  {
    id: 4,
    name: "Michael Brown",
    cardname: "Citi Double Cash Card",
    bankName: "Citi",
    description: "Earn 2% cash back on all purchases with no categories or limits.",
    maxCredit: 15000,
    active: true,
    annualFee: 0,
    interestRate: 15.99,
    introOffer: 0,
    recommendedCreditScore: "650-850",
    numberOfApplications: 500,
    createdDate: "22-05-2023",
    updatedDate: "22-05-2023",
    termsAndConditions: "Cash back is earned as 1% on purchase and 1% when payment is made."
  },
  {
    id: 5,
    name: "Emily Davis",
    cardname: "Capital One QuicksilverOne",
    bankName: "Capital One",
    description: "1.5% cash back on every purchase, with no rotating categories.",
    maxCredit: 5000,
    active: true,
    annualFee: 39,
    interestRate: 23.9,
    introOffer: 200,
    recommendedCreditScore: "650-700",
    numberOfApplications: 200,
    createdDate: "03-04-2023",
    updatedDate: "03-04-2023",
    termsAndConditions: "Cash back can be redeemed for statement credit or checks."
  },
  {
    id: 6,
    name: "David Wilson",
    cardname: "Discover it Cash Back",
    bankName: "Discover",
    description: "Get 5% cashback in rotating categories up to the quarterly limit.",
    maxCredit: 10000,
    active: true,
    annualFee: 0,
    interestRate: 14.99,
    introOffer: 0,
    recommendedCreditScore: "650-850",
    numberOfApplications: 400,
    createdDate: "28-01-2023",
    updatedDate: "28-01-2023",
    termsAndConditions: "Cashback is matched at the end of the first year for new cardholders."
  },
  {
    id: 7,
    name: "Matthew Taylor",
    cardname: "Wells Fargo Active Cash Card",
    bankName: "Wells Fargo",
    description: "Unlimited 2% cash back on every purchase.",
    maxCredit: 20000,
    active: true,
    annualFee: 0,
    interestRate: 17.24,
    introOffer: 200,
    recommendedCreditScore: "690-850",
    numberOfApplications: 250,
    createdDate: "12-11-2022",
    updatedDate: "12-11-2022",
    termsAndConditions: "Cash back earned is available as statement credit, gift cards, or checks."
  },
  {
    id: 8,
    name: "Sophia Miller",
    cardname: "Barclaycard Arrival Plus World Elite Mastercard",
    bankName: "Barclaycard",
    description: "Earn 2 miles per dollar on every purchase and 5% back on miles redeemed.",
    maxCredit: 30000,
    active: true,
    annualFee: 89,
    interestRate: 18.24,
    introOffer: 500,
    recommendedCreditScore: "700-850",
    numberOfApplications: 100,
    createdDate: "19-09-2023",
    updatedDate: "19-09-2023",
    termsAndConditions: "Minimum spending requirement applies to earn sign-up bonus."
  },
  {
    id: 9,
    name: "Lucas Martinez",
    cardname: "HSBC Premier World Elite Mastercard",
    bankName: "HSBC",
    description: "Exclusive travel and lifestyle benefits for HSBC Premier account holders.",
    maxCredit: 25000,
    active: true,
    annualFee: 395,
    interestRate: 15.99,
    introOffer: 1000,
    recommendedCreditScore: "750-850",
    numberOfApplications: 50,
    createdDate: "01-02-2023",
    updatedDate: "01-02-2023",
    termsAndConditions: "Must be an HSBC Premier customer to apply."
  },
  {
    id: 10,
    name: "Olivia Green",
    cardname: "Bank of America® Cash Rewards Credit Card",
    bankName: "Bank of America",
    description: "Earn 3% cash back on online shopping and 2% on grocery stores.",
    maxCredit: 10000,
    active: true,
    annualFee: 0,
    interestRate: 14.99,
    introOffer: 200,
    recommendedCreditScore: "650-800",
    numberOfApplications: 350,
    createdDate: "08-08-2023",
    updatedDate: "08-08-2023",
    termsAndConditions: "Cash back earned is subject to monthly spending caps."
  },
  {
    id: 11,
    name: "Jane Smith",
    cardname: "Chase Sapphire Preferred",
    bankName: "Chase",
    description: "Chase Sapphire Preferred is a premium rewards credit card offering travel points.",
    maxCredit: 10000,
    active: true,
    annualFee: 95,
    interestRate: 16.99,
    introOffer: 500,
    recommendedCreditScore: "700-850",
    numberOfApplications: 150,
    createdDate: "01-07-2023",
    updatedDate: "01-07-2023",
    termsAndConditions: "Annual fee is waived for the first year."
  },
  {
    id: 12,
    name: "Alice Johnson",
    cardname: "Citi Double Cash Card",
    bankName: "Citi",
    description: "Earn 2% cashback on every purchase with no cap or rotating categories.",
    maxCredit: 12000,
    active: true,
    annualFee: 0,
    interestRate: 14.99,
    introOffer: 150,
    recommendedCreditScore: "650-750",
    numberOfApplications: 80,
    createdDate: "15-05-2023",
    updatedDate: "15-05-2023",
    termsAndConditions: "Cashback is applied monthly and can be redeemed for statement credit or gift cards."
  },
    {
      id: 13,
      name: "Robert Lee",
      cardname: "American Express Gold Card",
      bankName: "American Express",
      description: "Earn 4x points on restaurants, including takeout and delivery.",
      maxCredit: 15000,
      active: true,
      annualFee: 250,
      interestRate: 15.24,
      introOffer: 600,
      recommendedCreditScore: "700-850",
      numberOfApplications: 120,
      createdDate: "20-06-2023",
      updatedDate: "20-06-2023",
      termsAndConditions: "Annual fee applies, but benefits offset the cost."
    },
    {
      id: 14,
      name: "Samuel Green",
      cardname: "Discover it Cashback",
      bankName: "Discover",
      description: "Cashback on all purchases with rotating 5% categories each quarter.",
      maxCredit: 10000,
      active: true,
      annualFee: 0,
      interestRate: 14.24,
      introOffer: 0,
      recommendedCreditScore: "650-750",
      numberOfApplications: 90,
      createdDate: "10-09-2023",
      updatedDate: "10-09-2023",
      termsAndConditions: "5% cashback is offered for select categories each quarter, activation required."
    }
    
   
]

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})

export class CreditcardsComponent {
[x: string]: any;

  
  creditcards: CreditCard[] = []
  editCreditCardForm: any;
  withoutRef: any;
  user: any;
  index: any;
  id!: number;
  name!: string;
  description!: string;
  interestRate!: number;
  maxCredit!: number;
  route: any;
  creditCardId!: Number;


  constructor(private creditcardsService: CreditcardsService, private dialog: MatDialog){
    this.creditcardsService.getCreditCards().subscribe((data:CreditCard[]) =>  {
      this.creditcards = data;
      this.data = this.editCreditCardForm;
      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // this.data = this.creditcards;
  })
}
  data!: CreditCard;
  newCreditCard : any = [];

  dataSource = new MatTableDataSource(this.creditcards)
  displayColumns = ["select","id","name","bankName","description","maxCredit","active","interestRate","actions"]

  // dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel (true,[]);

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild('secDialog',{ static: true}) secDialog:WithoutRef<any>


  selectHandler(row: CreditCard){
    // console.log("hello");
    this.selection.toggle(row as never);
  }
  
  openDialog(templateRef:TemplateRef<any>,item:any) {
    this.dialog.open(templateRef)
    // console.log("item:",item)
    this.data = item
    console.log('edited',item);

    this.saveNewUpdates(item);
    this.data = item;
    console.log("hey",this.index);
    console.log("people ",item);
  }

  saveNewUpdates(data:any){
     console.log("sending:",this.data)
     this.creditcardsService.updateCreditCard(this.data).subscribe((res)=>{
      console.log("update response ",res)
     })
  }
  // No button
  dontDelete(){
    this.dialog.closeAll();
  }

  // dialog prompt
  deleteDialog(templateRef:TemplateRef<any>,element: CreditCard){
    // console.log('Element passed to the dialog ',element);
    const dialogRef = this.dialog.open(templateRef,{
      data: element
    }) 

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        // console.log('Delete confirmed for:', element);
        this.removeItem(element);
      } else {
        // console.log('Delete canceled');
      }
    });
  }

  removeItem(data: any) {
      this.creditcardsService.deleteCreditCard(data.id).subscribe(() => {
        console.log(`Credit Card Deleted: ${data.name}`);

     this.creditcards = this.newCreditCard;

        // this.dialog.closeAll(); // Close dialog after successful deletion
      });

    }
  }
      
