import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, } from '@ionic/react';

import './Tab1.css';
import React from 'react';
const Tab1: React.FC = () => {
  return (
    <IonPage>
  
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>WELCOME</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonCard id="welcome">
          <IonCardHeader><IonCardTitle>Welcome to the Covid App</IonCardTitle></IonCardHeader>
          <IonCardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </IonCardContent>
          <IonImg src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/104631/s960_HFS_for_Gov.uk.jpg" alt="Wash Hands" />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
