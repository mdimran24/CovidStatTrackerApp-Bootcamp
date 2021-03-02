import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,IonCardContent, IonCardTitle, IonIcon, IonItem, IonLabel, IonButton, IonPopover} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React, {useState} from 'react';

const Tab3: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [popoverState2, setShowPopover2] = useState({ showPopover: false, event: undefined });
  const [popoverState3, setShowPopover3] = useState({ showPopover: false, event: undefined });
  const [popoverState4, setShowPopover4] = useState({ showPopover: false, event: undefined });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{fontSize:'20px'}}>LATEST COVID ADVICE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <br></br>

      <IonPopover
      
        cssClass='my-custom-class'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Symptoms</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          A high temperature – this means you feel hot to touch on your chest or back.
          A new, continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours.
          A loss or change to your sense of smell or taste – this means you've noticed you cannot smell or taste anything.
          </IonCardContent>
        </IonCard>
      </IonPopover>
      <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }}
      >
        Symptons
      </IonButton>

      <br></br><br></br>

      <IonPopover

        cssClass='my-custom-class'
        event={popoverState2.event}
        isOpen={popoverState2.showPopover}
        onDidDismiss={() => setShowPopover2({ showPopover: false, event: undefined })}
      >
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>What to do if you have symptoms</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          If you have any of the main symptoms of coronavirus:
          Get a test to check if you have coronavirus as soon as possible.
          You and anyone you live with should stay at home and not have visitors until you get your test result – only leave your home to have a test.
          </IonCardContent>
        </IonCard>
      </IonPopover>
      <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover2({ showPopover: true, event: e })
        }}
      >
        What to do if you have symptons
      </IonButton>

      <br></br><br></br>

      <IonPopover
        cssClass='my-custom-class'
        event={popoverState3.event}
        isOpen={popoverState3.showPopover}
        onDidDismiss={() => setShowPopover3({ showPopover: false, event: undefined })}
      >
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Guidelines</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          If you develop these symptoms, or you have received a positive coronavirus (COVID-19) test result, then you should immediately self-isolate stay at home for at least 10 days.
          If you feel you cannot cope with your symptoms at home, or your symptoms do not get better after 10 days, then use the NHS 111 online service.
          Wash your hands more often than usual, for 20 seconds using soap.
          </IonCardContent>
        </IonCard>
      </IonPopover>
      <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover3({ showPopover: true, event: e })
        }}
      >
        Guidelines
      </IonButton>

      <br></br><br></br>

      <IonPopover
        cssClass='my-custom-class'
        event={popoverState4.event}
        isOpen={popoverState4.showPopover}
        onDidDismiss={() => setShowPopover4({ showPopover: false, event: undefined })}
      >
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Lockdown</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          You must not leave, or be outside of your home except where necessary. You may leave the home to:
          shop for basic necessities, go to work, or to provide voluntary or charitable services. You are also allowed to exercise with your household, 
          seek medical assistance, 
          or attend education or childcare - for those eligible.
          </IonCardContent>
        </IonCard>
      </IonPopover>
      <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover4({ showPopover: true, event: e })
        }}
      >
        Lockdown
      </IonButton>

        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Extra Information</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          More information about Covid-19 and UK governments lockdown restrictions can be found below:
          <br></br>
          <br></br>
          <IonButton expand="block" href="https://www.nhs.uk/conditions/coronavirus-covid-19/">UK Covid-19 Information</IonButton>
          <br></br>
          <IonButton expand="block" href="https://www.gov.uk/coronavirus">UK Lockdown Information</IonButton>
          <br></br>
          <IonButton expand="block" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">WHO advice for the public</IonButton>

          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;