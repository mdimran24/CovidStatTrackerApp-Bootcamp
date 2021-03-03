import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonSlide, IonSlides, IonLabel, IonItem } from '@ionic/react';
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

const slideOpts = {
  initialSlide: 1,
  speed: 400
};
const [newCase,setNewCase] = useState<number>(0);
const [totalCases,setTotal] = useState<number>(0);
const [newDeath,setNewDeath] = useState<number>(0);
const [totalDeath,setTotalDeath] = useState<number>(0);
const [NewConfirmed,setNewConfirmed] = useState<number>(0);
const [totalConfirmed,setTotalConfirmed] = useState<number>(0);
const [Deaths,setDeaths] = useState<number>(0);
const [totalD,setTotalD] = useState<number>(0);
const [coutryCode,setCountryCode] = useState<string>('');
const ApiFetch = (url: RequestInfo)=>{
  
  fetch(url)
  .then(res=>{
    if(!res.ok) throw Error("An error has occurred could not find the data");
    return res.json();
  })
  .then(data=>{
    // here once the data has been fetched we set the data to the corresponding properties
    // This is the global covid data
   setNewCase(data.Global.NewConfirmed);
   setTotal(data.Global.TotalConfirmed);
   setNewDeath(data.Global.NewDeaths);
   setTotalDeath(data.Global.TotalDeaths);
    
  })
  .catch(err=>{
    console.log(err.message);
  })

      
}

window.onload=()=>{
  var select = document.querySelector('ion-select');
  if(select) if(!select.value==undefined){
    console.log(select);
  }
}

const updateData = async (url:RequestInfo)=>{ // in this function we fetch the same json data
  var response = await fetch(url);
  var {Countries} = await response.json();
  var select = document.querySelector('ion-select');
  console.log(Countries);
  if(select) if(select.value==undefined){ // we work out the value of select and if the user didn't choose a country he will see a pop-up
    alert("please choose a country");
  }else{ // otherwhise we verify if the value is the same as the Country_Region propertie from the json data
    for(var i=0;i<Countries.length;i++){ 
      if(select.value==Countries[i].Country){
        setNewConfirmed(Countries[i].NewConfirmed);
        setTotalConfirmed(Countries[i].TotalConfirmed);
        setDeaths(Countries[i].NewDeaths);
        setTotalD(Countries[i].TotalDeaths);
        break;
      }
    }
  }
}

return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>STATISTICS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
   
            <IonSlides pager={true} options={slideOpts}>

      <IonSlide>
        <div id="slide">
        <h1>New Cases</h1>
        <h2>{newCase}</h2>
        </div>
      </IonSlide>

      <IonSlide>
      <div id="slide">
      <h2>Total Cases</h2>
      <h2>{totalCases}</h2>
      </div>
      </IonSlide>

      <IonSlide>
      <div id="slide">
        <h1>New Deaths</h1>
        <h2>{newDeath}</h2>
        </div>
      </IonSlide>

      <IonSlide>
      <div id="slide">
        <h1>Total Deaths</h1>
        <h2>{totalDeath}</h2>
        </div>
      </IonSlide>
    </IonSlides>
   

        
        <IonList className="ion-text-center ion-margin-top">
        <IonButton size="default" onClick={()=>ApiFetch("https://api.covid19api.com/summary")}>
          Click here to display the data
          </IonButton>
          </IonList>
          
          <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Data</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          In this tab you will be able to see the data concerning 
          the Coronavirus.The data concerns the new cases, the total cases, the new deaths,
          the total deaths, the new recovered, the total recovered and the update date.
          For now the data display is the global one.We will display the data according to chosen
          country soon.
        </IonCardContent>
        </IonCard>
        <IonItem>
          <IonLabel className="ion-text-center ion-margin-top ion-margin-bottom">Select a country</IonLabel>
          <IonSelect>
            <FetchCountries url="https://api.covid19api.com/summary"></FetchCountries>
          </IonSelect>
        </IonItem>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="newCases">
              <h1>New Cases</h1>
              <h2>{NewConfirmed}</h2>
            </div>
            </IonSlide>

            <IonSlide>
            <div className="totaCases">
              <h1>Total Cases</h1>
              <h2>{totalConfirmed}</h2>
            </div>
            </IonSlide>

            <IonSlide>
            <div className="newDeaths">
              <h1>New Deaths</h1>
              <h2>{Deaths}</h2>
            </div>
            </IonSlide>

            <IonSlide>
            <div className="totalDeaths">
              <h1>Total Deaths</h1>
              <h2>{totalD}</h2>
            </div>
          </IonSlide>
        </IonSlides>
        <IonList className="ion-text-center">
          <IonButton onClick={()=>updateData('https://api.covid19api.com/summary')}>Click here to display the data</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


