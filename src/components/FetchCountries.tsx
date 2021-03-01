import { IonRow, IonSelectOption, IonText } from "@ionic/react";
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
        var {features} = await response.json();
        this.setState({
            Data:features.map((countries:any,i:number)=>{ //here we assign the ion-select option value which it's gonna be the country
                return(
                    <IonSelectOption key={i} value={countries.attributes.Country_Region}>{countries.attributes.Country_Region}</IonSelectOption>
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