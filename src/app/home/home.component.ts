import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cityName: string = "";

  /* Names of popular destinations to populate the home page */
  popularDestinations: string[] = [
    "London",
    "Vienna",
    "Madrid",
    "New York",
    "Dubai"
  ];
  constructor() {}

  ngOnInit() {}
}
