import { Injectable } from "@angular/core";
import { Departement } from "../data/departement";
import { HttpService } from "./httpService";

@Injectable({
    providedIn: 'root',
})
export class DepartementService {

    constructor(private httpService: HttpService){}

    getDailyDepartement(): Promise<Departement> {
        return new Promise((resolve, reject) => {
            this.httpService.httpGet("/daily").then((data: any) => {
                const departement = new Departement(data.name, data.img)
                resolve(departement)
            });
        });   
    }

    getDepartementList() {
        return new Promise((resolve, reject) => {
            this.httpService.httpGet("/departements").then((data: any) => {
                resolve(data)
            });
        });
    }
}