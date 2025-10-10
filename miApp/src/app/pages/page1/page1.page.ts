import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonListHeader, IonNav, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';
import { IonLabel } from '@ionic/angular/standalone';
import { IonBackButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButtons,  CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonList, IonInput, IonButton, IonContent, IonContent, IonItem, IonLabel, IonList, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonList]
})

export class Page1Component {
  component = Page1Component;
  text: string = '';
  email: string = '';
  phone: string = '';
  mostrar: boolean = false;

  constructor(private router: Router) { }

  guardarDatos() {
    if (this.text && this.email && this.phone) {
      this.mostrar = true;
    }else{
    this.mostrar = false;
  }
}

}
