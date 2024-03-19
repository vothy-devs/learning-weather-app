import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ForecastService } from './forecast.service';
import { IForecastResponse } from './forecast.response.model';
import { RecentSearchesService } from './recent-searches.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  constructor(private forcastSrvc: ForecastService, private recentSearchSvcs: RecentSearchesService, private changeDetection: ChangeDetectorRef) { }
  @Input() zipcode: string = ''
  recentSearches: IForecastResponse[] = []
  weatherResponse!: IForecastResponse

  ngOnChanges() {
    if(this.zipcode!==""){
      console.log(`the zip being used: ${this.zipcode}.`);
      this.getForecast();
      this.getRecentSearches();
      this.changeDetection.detectChanges();
    }
  }

  getForecast() {
    this.forcastSrvc.getForecast(this.zipcode).subscribe(data => {
      this.weatherResponse = data;
      this.recentSearchSvcs.setLocalSearches(data)
    });
  }

  getRecentSearches() {
      this.recentSearches = this.recentSearchSvcs.getLocalSearches();
  }
}
