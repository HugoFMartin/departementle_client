import { Component, OnInit } from '@angular/core';
import { Departement } from './data/departement';
import { DepartementService } from './services/departementService';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'departementle_client';

  dailyDepartement: Departement | null = null;
  departementList: String[] = [];

  constructor(private departementService: DepartementService) {
  }


  ngOnInit() {
    this.departementService.getDailyDepartement().subscribe(
      (departement: any) => {
        this.dailyDepartement = new Departement(departement.name, departement.img);
      }
    );

    this.departementService.getDailyDepartement().subscribe(
      (departementList: String[]) => {
        this.departementList = departementList;
      }
    );
  }
}
