import { Component } from "@angular/core";
import { DarkModeComponent } from "../DarkMode/darkMode.component";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [DarkModeComponent],
    templateUrl: "header.component.html"
})

export class HeaderComponent { }