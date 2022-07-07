import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, take } from "rxjs";
import { Departement } from "../data/departement";
import { HttpService } from "./httpService";

@Injectable({
    providedIn: 'root',
})
export class DepartementService {

    constructor(private httpService: HttpService){
    }

    getDailyDepartement(): Observable<any> {
        return this.httpService.httpGet("/daily").pipe(
            catchError(this.handleError)
        ); 
    }

    getDepartementList(): Observable<String[]>{
        return this.httpService.httpGet("/departements").pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any, caught: Observable<any>): Observable<any> {
        // TODO
        return error;
    }

}