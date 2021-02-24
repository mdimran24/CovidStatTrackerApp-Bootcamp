import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState,useEffect} from 'react';
import './Tab2.css';


const Tab2: React.FC = () => {

const [newCase,setNewCase] = useState<number>(0);
const [totalCases,setTotal] = useState<number>(0);
const [newDeath,setNewDeath] = useState<number>(0);
const [totalDeath,setTotalDeath] = useState<number>(0);
const [date,setDate] = useState(null);
const [isLoaded,setLoaded] = useState<boolean>(false);

const ApiFetch = (url: RequestInfo)=>{
  
  fetch(url)
  .then(res=>{
    if(!res.ok) throw Error("An error has occurred could not find the data");
    return res.json();
  })
  .then(data=>{
    /*console.log(data);*/
    setNewCase(data.Global.NewConfirmed);
    setTotal(data.Global.TotalConfirmed);
    setNewDeath(data.Global.NewDeaths);
    setTotalDeath(data.Global.TotalDeaths);
    setDate(data.Global.Date);    
  })
  .catch(err=>{
    console.log(err.message);
  })
  
  
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
            <IonCol>New cases</IonCol>
            <IonCol>Total cases</IonCol>
            <IonCol>New deaths</IonCol>
            <IonCol>Total deaths</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{newCase}</IonCol>
            <IonCol>{totalCases}</IonCol>
            <IonCol>{newDeath}</IonCol>
            <IonCol>{totalDeath}</IonCol>
          </IonRow>
        </IonGrid>
        <IonList className="ion-text-center ion-margin-top">
        <IonButton size="default" onClick={()=>ApiFetch("https://api.covid19api.com/summary")}>
          Click here to display the data
          </IonButton>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
