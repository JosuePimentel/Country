import { Component, OnInit } from "@angular/core";
import { BackComponent } from "../../Components/back/back.components";
import { CountryService } from "../../Service/Country.Service";
import { CountryData, infos } from "../../../module/types";
import { ActivatedRoute } from "@angular/router";
import { BorderComponent } from "../../Components/Borders/border.component";

@Component({
    selector: "app-countiresInfo",
    standalone: true,
    imports: [BackComponent, BorderComponent],
    templateUrl: "countriesInfo.components.html"
})

export default class CountriesInfoComponent implements OnInit{ 
    constructor( private activeRouter: ActivatedRoute, private meuServico: CountryService ) { }
    data: CountryData = {
        capital: '',
        flag: '',
        name: '',
        population: 0,
        region: '',
        borders: [],
        currencies: [],
        languages: [],
        nativeName: '',
        subregion: '',
        topLevelDomain: [],
        alpha3Code: ''
    }
    dataOrigin: CountryData[] = []
    nameCountry: any

    ngOnInit(): void {
        this.nameCountry = this.activeRouter.snapshot.paramMap.get('who')
        this.getDadosCountry()
    }

    getDadosCountry() {
        this.meuServico.getCountry().subscribe((resp) => {
            this.dataOrigin = resp
            resp.forEach((ele: CountryData) => {
                if(ele.name.toLowerCase() == this.nameCountry.toLowerCase()) 
                {
                    this.data = ele
                }
            })
        })
    }

    // infoCountry: infos = {
    //     capital: this.data.capital,
    //     currencies: this.data.currencies,
    //     languages: this.data.languages,
    //     nativeName: this.data.nativeName,
    //     population: this.data.population,
    //     region: this.data.region,
    //     subregion: this.data.subregion,
    //     topLevelDomain: this.data.topLevelDomain
    // }

}