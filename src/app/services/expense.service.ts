import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class expenseService {
    private headers: HttpHeaders;
    authToken = localStorage.getItem("userData");
    apiUrl = environment.apiUrl
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .set('Content-Type', 'application/json');

    }

    addExpense(params): Observable<any> {
        const crendation = params
        return this.http.post(this.apiUrl+'addexpense', crendation, { headers: this.headers })
    }

    getExpense(): Observable<any> {
        return this.http.get(this.apiUrl + 'getAllExpense')
    }
    getAllUsers(): Observable<any> {
        return this.http.get(this.apiUrl + 'users')
    }
}