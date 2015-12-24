module deb.app.testApp.model {
    export interface ICountry {
           CountryName : string
    }
    
    export class Country implements ICountry{
         CountryName :string
        constructor (name : string){
           this.CountryName= name;
        }
    }
}
