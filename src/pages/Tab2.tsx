import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonSlide, IonSlides, IonLabel, IonItem, IonImg, IonText, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab2.css';
import { printOutline } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { ReactComponent } from '*.svg';
import FetchCountries from '../components/FetchCountries';
import { features } from 'process';
import { isBlock } from 'typescript';


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
const [newRecovered, setNewRecovered] = useState<number>(0);
const [totalRecovered, setTotalRecovered] = useState<number>(0);
const [coutryCode,setCountryCode] = useState<string>('');
const [error,setError] = useState<string>('');
const [err,setErr] = useState<string>("");
const ApiFetch = (url: RequestInfo)=>{
  
  fetch(url)
  .then(res=>{
    if(res.status!=200) throw Error("An error has occurred please try again later");
    return res.json();
  })
  .then(data=>{
    // here once the data has been fetched we set the data to the corresponding properties
    // This is the global covid data
   setNewCase(data.Global.NewConfirmed);
   setTotal(data.Global.TotalConfirmed);
   setNewDeath(data.Global.NewDeaths);
   setTotalDeath(data.Global.TotalDeaths);
   
   setNewRecovered(data.Global.NewRecovered);
   setTotalRecovered(data.Global.TotalRecovered);
    
  })
  .catch(err=>{
    setError(err.message);
  })

      
}


  useIonViewDidEnter(()=>{
    ApiFetch('https://api.covid19api.com/summary');
  })




  const handleSelect = async (url:RequestInfo)=>{
    try{
    var response = await fetch(url);
    if(response.status!=200) throw Error("An error has occured plase try again later");
    var {Countries} = await response.json();
    Countries.map((countries:any,i:number)=>{
      var label = document.querySelector('ion-label');
      var select = document.querySelector('ion-select');
      var countryCode = countries.CountryCode.toLowerCase(countries.CountryCode);
      var imgUrl = `https://flagcdn.com/256x192/${countryCode}.png`
      if(select&&label) if(select.value==countries.Country){
        label.style.backgroundImage=`url(${imgUrl})`;
        setNewConfirmed(countries.NewConfirmed);
        setTotalConfirmed(countries.TotalConfirmed);
        setTotalD(countries.TotalDeaths);
        setDeaths(countries.NewDeaths);
      }
    })
  }catch(err){
    setErr(err.message);
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
          

          <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>Data</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              In this tab you will be able to see the data concerning
              the Coronavirus.The data concerns the new cases, the total cases, the new deaths,
              the total deaths, recovered cases, the total recovered and the update date.
          </IonCardContent>
          </IonCard>
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

          <IonSlide>
            <div id="slide">
              <h1>New Recovereries</h1>
              <h2>{newRecovered}</h2>
            </div>
          </IonSlide>

        <IonSlide>
            <div id="slide">
              <h1>Total Recovereries</h1>
              <h2>{totalRecovered}</h2>
            </div>
          </IonSlide>
        </IonSlides>


        <IonList className="ion-text-center ion-margin-top">
           
          <div style={{margin:'auto 0px',width:'80%'}}>{error}</div>
        </IonList>

        <br></br>
        <h2 id="title">COUNTRY STATS</h2>
        <br></br>
        <IonItem> 
          <IonLabel className="ion-text-center ion-margin-top ion-margin-bottom">Country</IonLabel>
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

          <IonSlide>
            <div className="newRecovered">
              <h1>New Recoveries</h1>
              <h2>{newRecovered}</h2>
            </div>
          </IonSlide>

          <IonSlide>
            <div className="totalRecovered">
              <h1>Total Recoveries</h1>
              <h2>{totalRecovered}</h2>
            </div>
          </IonSlide>          

        </IonSlides>
        <IonList className="ion-text-center">
          <div style={{margin:'auto 0px',width:'80%'}}>{err}</div>
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
  
