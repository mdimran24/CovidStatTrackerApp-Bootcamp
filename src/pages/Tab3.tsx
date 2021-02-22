import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,IonCardContent, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>LATEST COVID ADVICE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Symptoms</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          A high temperature – this means you feel hot to touch on your chest or back.
          A new, continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours.
          A loss or change to your sense of smell or taste – this means you've noticed you cannot smell or taste anything.
          </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>What to do if you have symptoms</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          If you have any of the main symptoms of coronavirus:
          Get a test to check if you have coronavirus as soon as possible.
          You and anyone you live with should stay at home and not have visitors until you get your test result – only leave your home to have a test.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Guidelines</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          If you develop these symptoms, or you have received a positive coronavirus (COVID-19) test result, then you should immediately self-isolate stay at home for at least 10 days.
          If you feel you cannot cope with your symptoms at home, or your symptoms do not get better after 10 days, then use the NHS 111 online service.
          Wash your hands more often than usual, for 20 seconds using soap.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;