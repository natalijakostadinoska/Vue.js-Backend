  
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyCHzE8o-N4k6wKiq5bvznCtwF9vX3W78Yw",
  authDomain: "testing-24f58.firebaseapp.com",
  projectId: "testing-24f58",
  storageBucket: "testing-24f58.appspot.com",
  messagingSenderId: "186881932081",
  appId: "1:186881932081:web:a4b1fbbf946347b7f3ce10",
  measurementId: "G-EE7ZDYCCB1"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});