import { Component, Output, EventEmitter, DoCheck } from "@angular/core";
import { Filter } from "../../../module/types"
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-filter",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "filter.component.html"
})

export class FilterComponent{ 
    filterArray: Filter[] = [
        {countryFilter: "", nameFilter: "Filter By Country"},
        {countryFilter: "Americas", nameFilter: "Americas"},
        {countryFilter: "Asia", nameFilter: "Asia"},
        {countryFilter: "Europe", nameFilter: "Europe"},
        {countryFilter: "Oceania", nameFilter: "Oceania"}
    ]

    showFilter:boolean = false

    showF() {
        this.showFilter ==  true ? this.showFilter = false : this.showFilter = true
    }

    filterSelect: string = this.filterArray[0].nameFilter
    @Output() eventEmitterFilter = new EventEmitter
    clickFilter(filter: string) {
        this.filterSelect = filter;
        this.eventEmitterFilter.emit(this.filterSelect)
    }
}