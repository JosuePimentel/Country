import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class CountryService {
    private urlJSON = 'assets/data.json'

    constructor(private http: HttpClient) { }

    getCountry():Observable<any> {
        return this.http.get(this.urlJSON)
    }
}