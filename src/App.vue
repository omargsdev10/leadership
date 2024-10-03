<template>
  <v-app>
    <v-app-bar app class="nav-bar  animate__animated animate__fadeIn">
      <!-- Logo Image -->
      <v-img
        src="https://devjuiceblobstorage.blob.core.windows.net/devjuiceblobstorage/leadership/leadership.png"
        alt="Logo"
        max-width="50"
        class="mr-3"
      ></v-img>
      <v-toolbar-title>Leadership Academy</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text class="text-white animate__animated animate__bounceIn" to="/us">Nosotros</v-btn>
      <v-btn text class="text-white animate__animated animate__bounceIn" to="/courses">Oferta</v-btn>
      <v-btn text class="text-white animate__animated animate__bounceIn" to="/home">Empresas</v-btn>
      <v-btn text class="text-white animate__animated animate__bounceIn" to="/certifications">Certificaciones</v-btn>
      <v-btn text class="text-white btn-ingresar animate__animated animate__tada" to="/login">Ingresar</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <!--
        <h1>Bienvenido a Mi Aplicación</h1>
        <p>Contenido de la página aquí...</p>
        -->
        
        <router-view></router-view> <!-- Aquí se muestran las vistas -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<style>
  /* Agrega cualquier estilo adicional aquí */
  .nav-bar {
    background-color: #008000 !important;
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
</style>
