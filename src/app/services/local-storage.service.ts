import { Injectable } from '@angular/core';
import { Guess } from '../data/guess';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keys = {
    dailyGuessesKey: "daily_guess",
    dailyguessedKey: "daily_guessed",
    idKey: "id",
    statsKey: "stats"
  }
  private dailyGuesses: Guess[]= [];
  
  constructor() {
    this.dailyGuesses = this.getGuesses();
  }

  public saveGuess(guess: Guess) {
    this.dailyGuesses.push(guess);
    localStorage.setItem(this.keys.dailyGuessesKey, JSON.stringify(this.dailyGuesses));
  }

  public getGuesses(): Guess[] {
    return localStorage.getItem(this.keys.dailyGuessesKey) ?
      JSON.parse(localStorage.getItem(this.keys.dailyGuessesKey)!!) : 
      []
  }

  public setGuessed(state: boolean) {
    localStorage.setItem(this.keys.dailyguessedKey, JSON.stringify(state));
  }

  public getIsGuessed(): boolean {
    return JSON.parse(localStorage.getItem(this.keys.dailyguessedKey)!!)
  }

  public setId(date: number) {
    localStorage.setItem(this.keys.idKey, JSON.stringify(date));
  }

  public getId() {
    return localStorage.getItem(this.keys.idKey) ? 
      JSON.parse(localStorage.getItem(this.keys.idKey)!!) :
      null
  }

  public resetDailyState() {
    localStorage.setItem(this.keys.dailyguessedKey, JSON.stringify(null));
    localStorage.setItem(this.keys.dailyGuessesKey, JSON.stringify([]));
  }

  public getStats() {
    return localStorage.getItem(this.keys.statsKey) ?
      JSON.parse(localStorage.getItem(this.keys.statsKey)!!) : 
      null
  }

  public updateStats() {
    // TODO stat
  }
}
