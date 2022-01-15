import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

Axios.defaults.baseURL = "https://vuejs-fbf49-default-rtdb.firebaseio.com/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
