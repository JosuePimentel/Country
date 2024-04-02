export type Filter = {
    nameFilter: string,
    countryFilter: string
}

export type CountryData = {
    name: string,
    region: string,
    population: number,
    capital: string,
    flag: string,
    nativeName: string,
    subregion: string,
    topLevelDomain: string[],
    currencies: currency[],
    languages: language[],
    borders: string[],
    alpha3Code: string
}

type currency = {
    code: string,
    name: string,
    symbol: string
}
type language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export type infos = {
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: string[],
    currencies: currency[],
    languages: language[]
}