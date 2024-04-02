import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, DoCheck, OnInit } from "@angular/core";
import { CountryData } from "../../../module/types";
import { CountryService } from "../../Service/Country.Service";
import { RouterLink } from "@angular/router";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-card",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "card.component.html",
})

export class CardComponent implements DoCheck{ 
    dataOrigin: CountryData[] = []
    dataSelect: CountryData[] = []
    
    constructor(private meuServico: CountryService) {
        this.getDadosCountry()
    }

    getDadosCountry(){
        this.meuServico.getCountry().subscribe((resp) => {
            this.dataOrigin = resp
            this.dataSelect = resp
        })
    }

    @Input() valueSearch: string = ''
    @Input() valueFilter: string = ''
 
    ngDoCheck(): void {
        this.dataSelect = []
        this.dataOrigin.forEach((ele) => {
            if(ele.name.toLowerCase().includes(this.valueSearch.toLowerCase()) && ele.region.toLowerCase().includes(this.valueFilter == 'Filter By Country' ? '' : this.valueFilter.toLowerCase()))
            {
                this.dataSelect.push(ele)
            }
        })
    }
}