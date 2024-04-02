import { Component, Input } from "@angular/core";
import { InputComponent } from "../Input/input.component";
import { FilterComponent } from "../Filter/filter.component";
import { CardComponent } from "../Card/card.component";

@Component({
    selector: "app-country",
    standalone: true,
    imports: [InputComponent, FilterComponent, CardComponent, CardComponent],
    templateUrl: "countryHome.component.html"
})

export class CountryHomeComponent { 
    
    valueSearchReceive: string = ''
    receiveEmitterInput(newValue: string) {
        this.valueSearchReceive = newValue
    }

    valueFilterReceive: string = ''
    receiveEmitterFilter(newValue: string) {
        this.valueFilterReceive = newValue
    }
}