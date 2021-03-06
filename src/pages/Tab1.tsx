import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonPopover } from '@ionic/react';
import './Tab1.css';
import React, { useState } from 'react';
const Tab1: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>WELCOME</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonCard id="welcome" color="light" onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }}>
          <IonCardContent>
          <IonCardHeader>
            <IonCardTitle>Welcome to the Covid App</IonCardTitle>
          </IonCardHeader>
            Welcome to the COVID-19 App. This Application will show you the latsest information about COVID-19 in your country and allow you to view advice about COVID-19. This is not an official government COVID-19 application. However all links and information provided is taken directly from government sources. Please if you require more information visit https://www.nhs.uk/conditions/coronavirus-covid-19/ or https://coronavirus.data.gov.uk/ . Thank you and stay safe.
          </IonCardContent>
        </IonCard>

        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >

          <IonCard id="welcomepop" color="light">
            <IonCardContent>
              Welcome to the COVID-19 App. This Application will show you the latsest information about COVID-19 in your country and allow you to view advice about COVID-19. This is not an official government COVID-19 application. However all links and information provided is taken directly from government sources. Please if you require more information visit https://www.nhs.uk/conditions/coronavirus-covid-19/ or https://coronavirus.data.gov.uk/ . Thank you and stay safe.
          </IonCardContent>
          </IonCard>
        </IonPopover>


        <IonCard>
          <IonImg src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/104631/s960_HFS_for_Gov.uk.jpg" alt="Wash Hands" />
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
