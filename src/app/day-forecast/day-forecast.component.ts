import { Component, OnInit, Input } from "@angular/core";
import CustomDate from "../custom_date/date";

@Component({
  selector: "day-forecast",
  templateUrl: "./day-forecast.component.html",
  styleUrls: ["./day-forecast.component.css"]
})
export class DayForecastComponent implements OnInit {
  @Input() currentDate: string;
  @Input() forecast: Object[];
  standardDate: String;
  custDate = new CustomDate();
  todaysForecast: Object[] = [];
  forecastHours: String[] = [
    "00:00:00",
    "03:00:00",
    "06:00:00",
    "09:00:00",
    "12:00:00",
    "15:00:00",
    "18:00:00",
    "21:00:00"
  ];

  constructor() {}

  ngOnInit() {
    this.standardDate = this.custDate.getStandardDate(this.currentDate);
  }

  ngOnChanges() {
    if (this.forecast !== undefined && this.forecast.length > 0) {
      this.forecast.forEach((forecastElem: Object) => {
        let forecastDate = new Date(forecastElem["dt_txt"]).getDate();
        if (forecastDate === new Date(this.currentDate).getDate()) {
          this.todaysForecast.push(forecastElem);
        }
      });
    }
  }
}
