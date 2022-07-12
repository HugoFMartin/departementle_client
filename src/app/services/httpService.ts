import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    readonly baseUrl = "http://192.168.1.85:8080";

    constructor(private http: HttpClient){}

    httpGet(url: String): Observable<Object> {
        return this.http.get(this.baseUrl + url);
    }

    httpPost(url:String, data:any) {
        return this.http.post(this.baseUrl + url,data)
    }
}