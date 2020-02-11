import { Component, OnInit, ɵConsole } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import CustomDate from "../custom_date/date";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent implements OnInit {
  searchName: String;
  custDate = new CustomDate();
  dateList: string[];
  standardDateList: string[];

  forecast: Object[];

  constructor(route: ActivatedRoute, private http: HttpClient) {
    this.searchName = route["params"]["_value"]["name"];
    this.dateList = this.custDate.getFullDateArray(5);
  }

  ngOnInit() {
    let subscriptionCurrentWeather = this.http
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.searchName +
          "&units=metric&APPID=48f6c5dc045dd8ad305f552108ec5d49"
      )
      .subscribe(res => {
        subscriptionCurrentWeather.unsubscribe();
      });

    let subscriptionForecast = this.http
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
          this.searchName +
          "&units=metric&APPID=48f6c5dc045dd8ad305f552108ec5d49"
      )
      .subscribe(res => {
        this.forecast = res["list"];

        /* Define the picture based on the current weather */

        subscriptionForecast.unsubscribe();
      });
  }
}
