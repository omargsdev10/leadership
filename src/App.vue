<template>
  <v-app :class="{ principal: $route.meta.requiresBackground, general: !$route.meta.requiresBackground }">
    <v-app-bar v-if="tokenExists" app class="nav-bar animate__animated animate__fadeIn">
      <!-- Logo Image -->
      <v-img
        src="https://devjuiceblobstorage.blob.core.windows.net/devjuiceblobstorage/leadership/leadership.png"
        alt="Logo"
        max-width="50"
        class="mr-3"
      ></v-img>
      <v-toolbar-title>Leadership Academy</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Icono del menú hamburguesa -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
          <v-list-item to="/us">
            <v-list-item-title>Nosotros</v-list-item-title>
          </v-list-item>
          <v-list-item to="/courses">
            <v-list-item-title>Oferta</v-list-item-title>
          </v-list-item>
          <v-list-item to="/home">
            <v-list-item-title>Empresas</v-list-item-title>
          </v-list-item>
          <v-list-item to="/certifications">
            <v-list-item-title>Certificaciones</v-list-item-title>
          </v-list-item>
          <v-list-item v-on:click="logout()">
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div class="d-none d-md-flex options-menu">
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/courses">Productos</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/us">Nosotros</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/home">Alianzas</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/contact">Contacto</v-btn>
        <!-- <v-btn text class="text-white btn-ingresar animate__animated animate__tada" to="/login">Ingresar</v-btn> -->
        <v-btn text v-on:click="logout()" class="text-white btn-ingresar animate__animated animate__tada" to="/login">Ingresar</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view> <!-- Aquí se muestran las vistas -->
      </v-container>
      <v-row>
        <div>
          <v-snackbar
            v-model="snackbarStore.isVisible"
            rounded="pill"
            :color="snackbarStore.color">
            
            {{ snackbarStore.message }}

            <template v-slot:actions>
              <v-btn class="capitalize" color="white" variant="text" @click="snackbarStore.isVisible = false">
                {{ snackbarStore.btnTitle }}
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import cookieUtil from './utils/cookieUtil'
import { snackbarStore } from './stores/snackbarStore';

export default {
  setup() {
    return {
      snackbarStore
    }
  },
  data() {
    return {
      snackbar: false,
      drawer: false, // Controla el estado del menú lateral
      tokenExists: cookieUtil.getToken() !== null,
    }
  },
  watch: {
    '$route'(to, from) {
      this.onRouteChange();
      console.log(to, from);
    }
  },
  methods: {
    logout(){
      console.log("logiout");
      cookieUtil.logout();
    },
    onRouteChange() {
      // Your logic here
      console.log('Route changed to:', this.$route.path);
      this.tokenExists = cookieUtil.isAuthenticated();
    }
  }
}
</script>


<style>
  .principal {
    background-image: linear-gradient(to right top, #0a63ff, #0096ff, #00b3f1, #00c592, #0fcf0f);
  }
  .general {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,128L17.1,149.3C34.3,171,69,213,103,245.3C137.1,277,171,299,206,293.3C240,288,274,256,309,256C342.9,256,377,288,411,266.7C445.7,245,480,171,514,128C548.6,85,583,75,617,80C651.4,85,686,107,720,117.3C754.3,128,789,128,823,133.3C857.1,139,891,149,926,138.7C960,128,994,96,1029,112C1062.9,128,1097,192,1131,192C1165.7,192,1200,128,1234,101.3C1268.6,75,1303,85,1337,96C1371.4,107,1406,117,1423,122.7L1440,128L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: bottom
  }
  .btn-circle
  {
    border-radius: 45px !important;
  }
  .capitalize {
    text-transform: capitalize !important;
  }
  .btn-login {
    /* //background-color: #ff5b00 !important; */
    background-color: #0A63FF !important;
    margin-top: 10px;
  }
  .container-transparent {
    background: #0000001c !important;
  }
  .container-transparent-white {
    background: #ffffff8c !important;
  }
  /* Agrega cualquier estilo adicional aquí */
  .nav-bar {
    /*background-color: #008000 !important; */
    background-color: #103f91 !important;
  }
  .text-white, .v-toolbar-title {
    color: #fff !important;
  }
  .v-toolbar-title {
    margin-inline-start: 0px !important;
  }
  .v-img {
    margin-right: 5px !important;
    margin-left: 10px !important;
  }
  .btn-ingresar {
    margin-left: 5px;
    background-color: #ff5b00;
  }
  .options-menu {
    padding-right: 10px;
  }
</style>
