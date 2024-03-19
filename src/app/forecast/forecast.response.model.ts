export interface IForecastResponse {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: ICloud;
  rain?:IRain;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ICoord {
  lon: number;
  lat: number;
}

interface IRain {
  "1h": number;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?:number;
  grnd_level?:number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust?: number;
}

interface ICloud {
  all: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
