import { Component, Input } from "@angular/core";
import { CountryData } from "../../../module/types";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-border",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "border.component.html"
})

export class BorderComponent { 
    @Input() borders: string[] = []
    @Input() allData: CountryData[] = []
}