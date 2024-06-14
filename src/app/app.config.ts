
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAB8fnV84TOCoiyUIu55qfCemDiYfz0WOI",
  authDomain: "todo-angular-5d45e.firebaseapp.com",
  projectId: "todo-angular-5d45e",
  storageBucket: "todo-angular-5d45e.appspot.com",
  messagingSenderId: "1093879600538",
  appId: "1:1093879600538:web:3998092d11ccc2c74f1623"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};