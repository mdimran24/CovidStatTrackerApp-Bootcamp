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
       try{
        var response = await fetch(this.props.url); //the data is fetched asyncronously and stored in features property
        if(response.status!=200) throw Error('an Error has occurred please try again later');
        var {Countries} = await response.json();
        this.setState({
            Data:Countries.map((countries:any,i:number)=>{ //here we assign the ion-select option value which it's gonna be the country
                return(
                    
                    <IonSelectOption key={i} value={countries.Country}>{countries.Country} </IonSelectOption>
                    
                )
            }) //the map function allows us to return this for each country like a for loop
        })
     }catch(err){

     }
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