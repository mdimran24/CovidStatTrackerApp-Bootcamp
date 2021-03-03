import { IonRow, IonSelectOption, IonText,IonImg, IonList, IonItem, IonThumbnail, IonContent } from "@ionic/react";
import { url } from "inspector";
import { features } from "process";
import React, { ReactNode } from "react";
import { isFunctionTypeNode } from "typescript";
export interface FetchCountriesProps {
    url: string;
}

export interface CountryDataProps{
    Data:string;
    
}


 
class FetchCountries extends React.Component<FetchCountriesProps,CountryDataProps>{
       _isMounted = false;  
    constructor(probs:any){
        super(probs)
        this.state={
            Data:"",
            
        }
        
    }
    
   async componentDidMount(){ //this function run the code which fetchs a json data when the component is mounted
       this._isMounted=true;
        var response = await fetch(this.props.url); //the data is fetched asyncronously and stored in features property
        var {Countries} = await response.json();
        console.log(Countries);
        this.setState({
            Data:Countries.map((countries:any,i:number)=>{ //here we assign the ion-select option value which it's gonna be the country
            var countryCode = countries.CountryCode.toLowerCase(countries.CountryCode);
            var imgUrl = `https://flagcdn.com/16x12/`+countryCode+`.png`;
            //console.log(imgUrl);
                return(

                    <IonSelectOption key={i} value={countries.Country}>{countries.Country} <IonImg src={imgUrl} /> </IonSelectOption>
                    
                )
            }) //the map function allows us to return this for each country like a for loop
        })
    }
    
   componentWillUnmount(){
       this._isMounted=false;
   }

  
   
    
    render() { // we render the state to the DOM (Document object model) so wherever we call the FetchCountries tag in tab 2 the selectOption will apear 
        return ( // in this case we called it between the <IonSelect> tag
          this.state.Data 
        );
    }
}
 
export default FetchCountries;