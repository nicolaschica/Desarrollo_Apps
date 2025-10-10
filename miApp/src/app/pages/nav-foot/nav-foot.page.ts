// import { Component, OnInit } from '@angular/core';
// import {
//   // Controles básicos
//   IonToggle, IonCheckbox, IonButton,
//   // Cabecera y Pie de página
//   IonHeader, IonTitle, IonToolbar, IonFooter,
//   // Componentes de Tarjeta
//   IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
//   // Componentes de Acción y Diálogo
//   IonAlert, IonActionSheet,
//   // Componentes de Lista y Acordeón
//   IonAccordion, IonAccordionGroup, IonItem, IonLabel,
//   // Componentes de Navegación
//   IonTabBar, IonTabButton, IonIcon, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonContent } from '@ionic/angular/standalone';

// import type { OverlayEventDetail } from '@ionic/core';
// import { addIcons } from 'ionicons';
// import { heart, calendar, musicalNote } from 'ionicons/icons';

// @Component({
//   selector: 'app-nav-foot',
//   templateUrl: './nav-foot.page.html',
//   styleUrls: ['./nav-foot.page.scss'],
//   imports: [IonContent, 
//     IonFooter, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
//     IonBadge, IonBreadcrumb, IonBreadcrumbs, IonTabBar, IonTabButton, IonIcon, IonLabel,
//     IonHeader, IonAlert, IonButton, IonTitle, IonToolbar, IonToggle, IonAccordion,
//     IonAccordionGroup, IonItem, IonActionSheet // IonLabel se repite, pero está bien si se deja.
//   ],
// })
// export class NavFootPage implements OnInit {

//   // Propiedades para Alert (4)
//   public alertButtons = ['OK'];
//   public alertInputs = [
//     { placeholder: 'Name' },
//     { placeholder: 'Nickname (max 8 characters)', attributes: { maxlength: 8 } },
//     { type: 'number', placeholder: 'Age', min: 1, max: 100 },
//     { type: 'textarea', placeholder: 'A little about yourself' },
//   ];

//   // Propiedades para Action Sheet (3)
//   public actionSheetButtons = [
//     { text: 'Delete', role: 'destructive', data: { action: 'delete' } },
//     { text: 'Share', data: { action: 'share' } },
//     { text: 'Cancel', role: 'cancel', data: { action: 'cancel' } },
//   ];

//   constructor() {
//     // Inicializa los iconos utilizados en <ion-icon> (5 y 7)
//     addIcons({ heart, calendar, musicalNote });
//   }

//   ngOnInit() { }

//   // Método para Action Sheet (3)
//   logResult(event: CustomEvent<OverlayEventDetail>) {
//     console.log('Action Sheet cerrado. Resultado:', JSON.stringify(event.detail, null, 2));
//     // Puedes ver el resultado en la consola del navegador
//   }
// }