import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { IonActionSheet, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonIcon, IonLabel, IonList, IonItem, IonHeader, IonToolbar, IonIcon, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  constructor() {}
}
