import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private headers: HttpHeaders;
  apiUrl = environment.apiUrl
  authToken = localStorage.getItem("userData");
  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders()
      .set('Authorization', this.authToken)
      .set('Content-Type', 'application/json');
  }

  // adbudget(params): Observable<any> {
  //   console.log("🚀 ~ BudgetService ~ adbudget ~ params:", params)
  //   try {
  //     const crendation = params
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ this.apiUrl:", this.apiUrl)
  //     const url = this.http.post(this.apiUrl + 'addbudget', crendation, { headers: this.headers })
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ url:", url)
  //     return this.http.post(this.apiUrl + 'addexpense', crendation, { headers: this.headers })

  //     //return this.http.post(this.apiUrl + 'addbudget', crendation, { headers: this.headers })
  //   } catch (error) {
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ error:", error)
  //     return error
  //   }
  // }

  // adbudget(params): Observable<any> {
  //   console.log("🚀 ~ BudgetService ~ adbudget ~ params:", params);
  //   try {
  //     const crendation = params;
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ this.apiUrl:", this.apiUrl);
  //     const url = this.apiUrl + 'addbudget';
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ url:", url);
  //     const res = this.http.post<any>(this.apiUrl + 'addbudget', params)
  //      console.log("🚀 ~ BudgetService ~ adbudget ~ res:", res)
  //      console.log("callll ...234567890=...............>>>>>>>>>>>>.")
  // return res
  //   } catch (error) {
  //     console.log("🚀 ~ BudgetService ~ adbudget ~ error:", error);
  //     return throwError(error); // Import throwError from 'rxjs'
  //   }
  // }

  adbudget(params): Observable<any> {
    console.log("🚀 ~ BudgetService ~ adbudget ~ params:", params);
    const url = this.apiUrl + 'addbudget';
    console.log("🚀 ~ BudgetService ~ adbudget ~ url:", url);

    return this.http.post<any>(url, params).pipe(
      catchError(error => {
        console.log("🚀 ~ BudgetService ~ adbudget ~ error:", error);
        return throwError(error);
      })
    );
  }

}
