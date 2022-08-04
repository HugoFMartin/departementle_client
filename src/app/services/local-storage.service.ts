import { Injectable } from '@angular/core';
import { Guess } from '../data/guess';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keys = {
    dailyGuessesKey: "daily_guess",
    dailyguessedKey: "daily_guessed",
    dateKey: "date"
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

  public setGuessed() {
    localStorage.setItem(this.keys.dailyguessedKey, JSON.stringify(true));
  }

  public getIsGuessed(): boolean {
    return JSON.parse(localStorage.getItem(this.keys.dailyguessedKey)!!)
  }

  public setDate(date: number) {
    localStorage.setItem(this.keys.dateKey, JSON.stringify(date));
  }

  public getDate() {
    return localStorage.getItem(this.keys.dateKey) ? 
      JSON.parse(localStorage.getItem(this.keys.dateKey)!!) :
      null
  }

  public resetDailyState() {
    localStorage.setItem(this.keys.dailyguessedKey, JSON.stringify(false));
    localStorage.setItem(this.keys.dailyGuessesKey, JSON.stringify([]));
  }

  // TODO stat
}
