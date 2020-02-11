import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "forecast-tile",
  templateUrl: "./forecast-tile.component.html",
  styleUrls: ["./forecast-tile.component.css"]
})
export class ForecastTileComponent implements OnInit {
  @Input() currentHour: string;
  @Input() currentDate: string;
  @Input() forecast: String[];
  todaysForecast: Object = {
    icon: "",
    temp: "",
    description: "",
    wind: ""
  };
  constructor() {}

  weatherIconUrl: String;

  ngOnInit() {}

  ngOnChanges() {
    if (this.forecast !== undefined && this.forecast.length > 0) {
      this.forecast.forEach((forecastElem: Object) => {
        let forecastDate = new Date(forecastElem["dt_txt"]).getDate();
        if (
          forecastDate === new Date(this.currentDate).getDate() &&
          this.currentHour ===
            forecastElem["dt_txt"].slice(11, forecastElem["dt_txt"].length)
        ) {
          this.todaysForecast = {
            icon: forecastElem["weather"][0]["icon"],
            temp: Math.round(forecastElem["main"]["temp"]),
            description: forecastElem["weather"][0]["description"],
            wind: Math.round(forecastElem["wind"]["speed"])
          };
        }
      });

      if (this.todaysForecast["icon"] !== "") {
        this.weatherIconUrl =
          "http://openweathermap.org/img/wn/" +
          this.todaysForecast["icon"] +
          "@2x.png";
      }

      console.log(this.currentDate, this.currentHour, this.todaysForecast);
      console.log(this.weatherIconUrl);
    }
  }
}
