import { Component } from "@angular/core";

@Component({
    selector: "app-dark",
    standalone: true,
    imports: [],
    templateUrl: "darkMode.component.html"
})

export class DarkModeComponent {
    darkMode() {
        document.documentElement.classList.toggle('dark')
    }
}
