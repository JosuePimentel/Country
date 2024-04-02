import { Component } from "@angular/core";
import { CountryHomeComponent } from "../../Components/CountryHome/countryHome.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CountryHomeComponent],
    templateUrl: "home.component.html"
})

export class HomeComponent { }