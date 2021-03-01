import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {IonSelect,IonSelectOption} from '@ionic/react';
import React, {useState,useEffect} from 'react';
import './Tab2.css';
import {  printOutline } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { ReactComponent } from '*.svg';
import FetchCountries from '../components/FetchCountries';
import { features } from 'process';

const Tab2: React.FC = () => {
// We use useSate hook to declare a variable and set it
const [activeCases,setActiveCase] = useState<number>(0);
const [confirmedCases,setConfirmedCase] = useState<number>(0);
const [totalDeath,setTotalDeath] = useState<number>(0);
const [recovered,setRecovered] = useState<number>(0);
const [active,setActive] = useState<number>(0);
const [confirmed,setConfirmed] = useState<number>(0);
const [death,setDeath] = useState<number>(0);
const [recov,setRecov] = useState<number>(0);
const ApiFetch = (url: RequestInfo)=>{
  
  fetch(url)
  .then(res=>{
    if(!res.ok) throw Error("An error has occurred could not find the data");
    return res.json();
  })
  .then(data=>{
    // here once the data has been fetched we set the data to the corresponding properties
    // This is the global covid data
    setActiveCase(data.data.active);
    setConfirmedCase(data.data.confirmed);
    setTotalDeath(data.data.deaths);
    setRecovered(data.data.recovered);
    
  })
  .catch(err=>{
    console.log(err.message);
  })

      
}

const updateData = async (url:RequestInfo)=>{ // in this function we fetch the same json data
  var response = await fetch(url);
  var {features} = await response.json();
  var select = document.querySelector('ion-select');
  if(select) if(select.value==undefined){ // we work out the value of select and if the user didn't choose a country he will see a pop-up
    alert("please choose a country");
  }else{ // otherwhise we verify if the value is the same as the Country_Region propertie from the json data
    for(var i=0;i<features.length;i++){ 
      if(select.value==features[i].attributes.Country_Region){
        setActive(features[i].attributes.Active);
        setConfirmed(features[i].attributes.Confirmed);
        setDeath(features[i].attributes.Deaths);
        setRecov(features[i].attributes.Recovered);
        break;
      }
    }
  }
}

return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Covid19 data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle color="tertiary" className= "ion-text-center ion-text-bold">Data</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          In this tab you will be able to see the data concerning the 
          Covid19.The data concerns the new cases, the total cases, the new deaths,
          the total deaths, the new recovered, the total recovered and the update date.
          For now the data display is the global one.We will display the data according to chosen
          country soon.
        </IonCardContent>
        </IonCard>
        <IonGrid className="ion-text-center">
          <IonRow className="GridHead ion-text-bold">
            <IonCol>Active cases</IonCol>
            <IonCol>Confirmed cases</IonCol>
            <IonCol>Total deaths</IonCol>
            <IonCol>Recovered</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{activeCases}</IonCol>
            <IonCol>{confirmedCases}</IonCol>
            <IonCol>{totalDeath}</IonCol>
            <IonCol>{recovered}</IonCol>
          </IonRow>
        </IonGrid>
        <IonList className="ion-text-center ion-margin-top ion-margin-bottom">
        <IonButton size="default" onClick={()=>ApiFetch('https://covid2019-api.herokuapp.com/v2/total')}>Click here to display the data</IonButton>        
          </IonList>
          <IonItem>
            <IonLabel className="ion-text-center ion-text-bold">Select a country</IonLabel>
            <IonSelect>
            <FetchCountries url="https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json"/>
            </IonSelect>
          </IonItem>
          <IonGrid className="ion-text-center">
            <IonRow>
              <IonCol>Active cases</IonCol>
              <IonCol>Confirmed cases</IonCol>
              <IonCol>Total deaths</IonCol>
              <IonCol>Recovered</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>{active}</IonCol>
              <IonCol>{confirmed}</IonCol>
              <IonCol>{death}</IonCol>
              <IonCol>{recov}</IonCol>
            </IonRow>
          </IonGrid>
          <IonList className="ion-text-center ion-padding-top ion-padding-bottom"> 
          <IonButton onClick={()=>updateData("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json")}  id="btn" className="ion-text-center btn">Click here to display the data</IonButton>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


