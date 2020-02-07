import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cityName: string = "";
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
