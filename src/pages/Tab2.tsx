import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonSlide, IonSlides, IonLabel, IonItem, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab2.css';
import { printOutline } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { ReactComponent } from '*.svg';
import FetchCountries from '../components/FetchCountries';
import { features } from 'process';

const Tab2: React.FC = () => {
  // We use useSate hook to declare a variable and set it
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: true
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



const updateData = async (url:RequestInfo)=>{ // in this function we fetch the same json data
  var response = await fetch(url);
  var {Countries} = await response.json();
  var select = document.querySelector('ion-select');
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

  const handleSelect = async (url:RequestInfo)=>{
    var response = await fetch(url);
    var {Countries} = await response.json();
    Countries.map((countries:any,i:number)=>{
      var label = document.querySelector('ion-label');
      var select = document.querySelector('ion-select');
      var countryCode = countries.CountryCode.toLowerCase(countries.CountryCode);
      var imgUrl = `https://flagcdn.com/256x192/${countryCode}.png`
      if(select&&label) if(select.value==countries.Country){
        label.style.backgroundImage=`url(${imgUrl})`;
      }
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>STATISTICS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
          <h1 id="title">GLOBAL STATS</h1>
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
          <IonButton size="default" onClick={() => ApiFetch("https://api.covid19api.com/summary")}>
            UPDATE DATA
          </IonButton>
        </IonList>

        <IonCard color="primary">
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
        <br></br>
        <h2 id="title">COUNTRY STATS</h2>
        <br></br>
        <IonItem> 
          <IonLabel className="ion-text-center ion-margin-top ion-margin-bottom">Select a country</IonLabel>
          <IonSelect  onIonChange={()=>handleSelect("https://api.covid19api.com/summary")}>
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
          <IonButton onClick={() => updateData('https://api.covid19api.com/summary')}>UPDATE DATA</IonButton>
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
  
