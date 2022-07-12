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

  dailyDepartement: Departement = new Departement('','')
  departementList: string[] = [];
  tries: any[] = [];
  guessSucceed: boolean = false;

  constructor(private departementService: DepartementService) {
  }


  ngOnInit() {
    this.departementService.getDailyDepartement().subscribe(
      (departement: any) => {
        this.dailyDepartement = new Departement(departement.name, departement.img);
      }
    );

    this.departementService.getDepartementList().subscribe(
      (departementList: string[]) => {
        this.departementList = departementList;
      }
    );
  }

  onDepartementGuess = (guessDepartement: string) => {
    this.tries.push({departementName: guessDepartement})
    this.departementService.guessDepartement(guessDepartement).subscribe(
      (respond) => {
        if(respond) {
          this.guessSucceed = true;
        }
      }
    )
  }
  
}
