export interface CreditCard {
    
    id:number;
    name: any;
    cardname:string,
    bankName:string,
    description:string,
    maxCredit: number,
    active: boolean,
    annualFee:number,
    introOffer:number,
    interestRate: number,
    recommendedCreditScore: string,
    numberOfApplications:number,
    termsAndConditions:string,
    createdDate:string;
    updatedDate:string;
}
