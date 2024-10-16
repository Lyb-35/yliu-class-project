import 'bootstrap/dist/css/bootstrap.min.css';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ5enKPSHj-eYDHIvMVhMIes5b223nmhI",
  authDomain: "week7-yliu.firebaseapp.com",
  projectId: "week7-yliu",
  storageBucket: "week7-yliu.appspot.com",
  messagingSenderId: "194358209309",
  appId: "1:194358209309:web:a3f5ff262b5888a58a0ff4"
};

// Initialize Firebase
initializeApp(firebaseConfig);