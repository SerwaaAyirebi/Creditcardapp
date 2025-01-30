import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiUrl = "http://localhost:3000/creditcards"
  static creditCardId: any;

  constructor(private httpClient: HttpClient) {}
  
  createCreditcard(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiUrl,creditCard);
  }
// Get all credit cards
getCreditCards(): Observable<CreditCard[]>{
  return this.httpClient.get<CreditCard[]>(this.apiUrl);
}
// Get specific credit card
getCreditCardById(id: Number): Observable<CreditCard> {
  const url = `${this.apiUrl}/${id}`;
  return this.httpClient.get<CreditCard>(url); 
}
// update functionality
updateCreditCard(creditCard:CreditCard): Observable<CreditCard> {
  const url = `${this.apiUrl}/${creditCard.id}`;
  return this.httpClient.put<CreditCard>(url, creditCard);
}
// delete functionality
deleteCreditCard(id: Number):Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.httpClient.delete<void>(url);
}

}

