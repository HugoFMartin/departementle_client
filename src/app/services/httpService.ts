import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    readonly baseUrl = "http://192.168.1.85:8080";

    constructor(private http: HttpClient){}

    httpGet(url: String): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + url).subscribe((data) => {
                resolve(data)
            });
        })
            
    }
}