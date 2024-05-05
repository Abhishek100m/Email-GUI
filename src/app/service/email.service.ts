import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl:string = 'http://localhost:8082/email';

  constructor(private http:HttpClient) { }
  sendMail(data:any){
    return this.http.post(`${this.baseUrl}/sendMail`,data);
  }
}
