<template>
    <v-col>
      <v-card :color="cardColor" style="padding: 6px !important;">
        <template #prepend>
          <v-icon class="icon-title" :color="iconColor">{{ icon }}</v-icon>
          <v-card-title class="card-title">{{ title }}</v-card-title>
        </template>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    name: "StepperHeaderComponent",
    props: {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      iconColor: {
        type: String,
        default: "black",
      },
      cardColor: {
        type: String,
        default: "#e8f0ff",
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-title {
    margin-right: 8px; /* Ajusta según tus necesidades */
  }
  .card-title {
    font-size: 16px; /* Ajusta según tus necesidades */
  }
  </style>
  