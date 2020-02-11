import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DayComponent } from "./day/day.component";
import { HomeComponent } from "./home/home.component";
import { LocationComponent } from "./location/location.component";
import { PopularDestinationComponent } from "./popular-destination/popular-destination.component";
import { DayForecastComponent } from "./day-forecast/day-forecast.component";
import { ForecastTileComponent } from "./forecast-tile/forecast-tile.component";

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HomeComponent,
    LocationComponent,
    PopularDestinationComponent,
    DayForecastComponent,
    ForecastTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
