import { Injectable } from '@angular/core';
import { IForecastResponse } from './forecast.response.model';

@Injectable({
  providedIn: 'root'
})
export class RecentSearchesService {
  recentSearches: IForecastResponse[] = []

  constructor() { }

  getLocalSearches() {
    if (localStorage["recentSearches"]) {
      return JSON.parse(localStorage["recentSearches"]);
    }
  }
  setLocalSearches(search: IForecastResponse) {
    if (this.recentSearches.indexOf(search) == -1) {
      this.recentSearches.unshift(search);
      if (this.recentSearches.length > 5) {
        this.recentSearches.pop();
      }
      localStorage["recentSearches"] = JSON.stringify(this.recentSearches);
    }
  }
}
