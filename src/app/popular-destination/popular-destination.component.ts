import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "popular-destination",
  templateUrl: "./popular-destination.component.html",
  styleUrls: ["./popular-destination.component.css"]
})
export class PopularDestinationComponent implements OnInit {
  apiUrl: String = "api.openweathermap.org/data/2.5/weather?q=";
  apiKey: String = "&APPID=48f6c5dc045dd8ad305f552108ec5d49";
  constructor(private http: HttpClient) {}

  @Input() popularDestinationName: String;
  currentTemp: Number;
  currentWeather: String;
  currentWeatherIcon: String;
  windSpeed: Number;
  windDirection: String;
  imgUrl: String;
  weatherIconUrl: String;
  faLocationArrow = faLocationArrow;

  ngOnInit() {
    /* Define the picture of the destination based on the pre-determined popular destination */
    switch (this.popularDestinationName) {
      case "London":
        this.imgUrl =
          "https://govori.se/media/cache/upload/Photo/2017/12/30/london-1_fbimage.jpg";
        break;
      case "Vienna":
        this.imgUrl =
          "https://images.panoramatours.com/pt/focus/52/50/1920/810/user_upload/Sehenswuerdigkeiten/Wien/Vienna_Sightseeing_Tours/Historische_Stadtrundfahrt_Wien_-_Schloss_Schoenbrunn_mit_Brunnen__c__Vienna_Sightseeing_Tours_-_Bernhard_Luck.jpg";
        break;
      case "Madrid":
        this.imgUrl =
          "https://www.agencija-oskar.si/pictures/spanija-madrid.jpg";
        break;
      case "New York":
        this.imgUrl =
          "https://potovanja-pisanec.si/wp-content/uploads/2019/12/NY-Naslovna.jpg";
        break;
      case "Dubai":
        this.imgUrl =
          "https://q-cf.bstatic.com/images/hotel/max1024x768/206/206013993.jpg";
        break;
      default:
        break;
    }

    /* Get the current weather data for the 5 pre-determined popular destinations */
    let subscription = this.http
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.popularDestinationName +
          "&units=metric&APPID=48f6c5dc045dd8ad305f552108ec5d49"
      )
      .subscribe(res => {
        this.currentTemp = Math.round(res["main"]["temp"]);
        this.currentWeather = res["weather"][0]["main"];
        this.currentWeatherIcon = res["weather"][0]["icon"];
        this.windSpeed = Math.round(res["wind"]["speed"]);
        this.windDirection =
          res["wind"]["deg"] === undefined
            ? "-45deg"
            : String(res["wind"]["deg"] - 45) + "deg";

        /* Define the picture based on the current weather */

        this.weatherIconUrl =
          "http://openweathermap.org/img/wn/" +
          this.currentWeatherIcon +
          "@2x.png";

        subscription.unsubscribe();
      });
  }
}
