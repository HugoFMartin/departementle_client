import { Component, OnInit } from '@angular/core';
import { Departement } from './data/departement';
import { Observable, of } from 'rxjs';
import { DepartementService } from './services/departement.service';
import { LocalStorageService } from './services/local-storage.service';
import { Guess } from './data/guess';


const MAX_TRY_NUMBER = 6;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'departementle_client';

  dailyGuesses: Guess[] = [];
  guessSucceed: boolean = false;

  dailyDepartement: Departement = new Departement('','')
  departementList: string[] = [];

  constructor(private departementService: DepartementService, private localStorage: LocalStorageService) {
  }


  ngOnInit() {

    this.departementService.getDailyDepartement().subscribe(
      (response: any) => {
        this.isNewDay(response.date, false);
        this.dailyDepartement = new Departement(response.departement.name, response.departement.img);
      }
    );

    this.departementService.getDepartementList().subscribe(
      (departementList: string[]) => {
        this.departementList = departementList;
      }
    );

    this.updateGuesses();
    this.guessSucceed = this.localStorage.getIsGuessed();
  }

  onDepartementGuess = (guessDepartement: string) => {
    
    this.departementService.guessDepartement(guessDepartement).subscribe(
      (response: any) => {
        if (this.isNewDay(response.date, true)) {
          // TODO force refresh
        } else {
          if(response.isValid){
            this.guessSucceed = true;
            this.localStorage.setGuessed();
            // TODO handle win
          } 
          this.localStorage.saveGuess(new Guess (
            response.guessId,
            response.departement,
            response.distanceTo,
            response.direction
          ));
          this.updateGuesses();
          this.checkLastTry();
        }
      }
    )
  }


  private updateGuesses() {
    this.dailyGuesses = this.localStorage.getGuesses();
  }

  private checkLastTry() {
    if (this.dailyGuesses.length === MAX_TRY_NUMBER) {
      // TODO handle lose
    }
  }
  
  private isNewDay(date: number, forceRefresh: boolean): boolean {
    const currentDay = this.localStorage.getDate()
    // New day, reset local storage guesses
    if (!currentDay || currentDay != date) {
      this.localStorage.resetDailyState();
      this.localStorage.setDate(date);
      return true;
    }
    return false;
  }
}
