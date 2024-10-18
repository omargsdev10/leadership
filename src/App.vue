<template>
  <v-app>
    <v-app-bar app class="nav-bar animate__animated animate__fadeIn">
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
          <v-list-item to="/login">
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div class="d-none d-md-flex options-menu">
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/courses">Productos</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/us">Nosotros</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/home">Alianzas</v-btn>
        <v-btn text class="text-white animate__animated animate__bounceIn" to="/contact">Contacto</v-btn>
        <v-btn text class="text-white btn-ingresar animate__animated animate__tada" to="/login">Ingresar</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view> <!-- Aquí se muestran las vistas -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controla el estado del menú lateral
    };
  },
}
</script>


<style>
  /* Agrega cualquier estilo adicional aquí */
  .nav-bar {
    //background-color: #008000 !important;
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
