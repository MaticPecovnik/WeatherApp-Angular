import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DayComponent } from "./day/day.component";
import { HomeComponent } from "./home/home.component";
import { LocationComponent } from "./location/location.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "day", component: DayComponent },
  { path: "location", component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
