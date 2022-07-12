import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, take, throwError } from "rxjs";
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

    getDepartementList(): Observable<string[]>{
        return this.httpService.httpGet("/departements").pipe(
            catchError(this.handleError)
        );
    }

    guessDepartement(guessedDepartementName: string): Observable<string[]>{
        return this.httpService.httpPost("/guess", guessedDepartementName).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any, caught: Observable<any>): Observable<any> {
        return caught;
    }

}