import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import CountriesInfoComponent from './Pages/CountriesInfo/countriesInfo.components';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "country/:who",
        component: CountriesInfoComponent
    }
];
