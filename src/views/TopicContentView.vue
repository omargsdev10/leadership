<template>
  <v-container class="tutorial-view">
    <v-row>
      <v-col>
        <h1 style="color: #008000">Cómo Sumar en una Columna en Excel</h1>

        <v-card class="mt-5">
          <v-card-title style="color: #008000; font-size: 1.5rem;">
            <v-icon left>mdi-information</v-icon>
            Descripción
          </v-card-title>
          <v-card-text>
            <v-row class="subtitle-font" style="padding:30px;">
                En este tutorial, aprenderás a sumar valores en una columna en Excel utilizando la función SUMA. Esta función te permite calcular rápidamente el total de una serie de números.
            </v-row>
            
            <v-row justify="center">
                <v-col cols="auto" class="d-flex justify-center">
                <v-responsive height="250" aspect-ratio="16/9">
                    <iframe
                    height="250"
                    width="450"
                        src="https://www.youtube.com/embed/l5WsO4WjxXg?si=UDXZd0yvHyHORfRX"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </v-responsive>
                </v-col>
                
            </v-row>
          </v-card-text>
        </v-card>

        <v-divider class="mt-5"></v-divider>

        <v-card class="mt-5">
          <v-card-title style="color: #008000; font-size: 1.5rem;">
            <v-icon left>mdi-help-circle</v-icon>
            Instrucciones Paso a Paso
          </v-card-title>
          <v-card-text>
            <v-list>
                <v-list-item-group>
                <v-list-item v-for="(step, index) in steps" :key="index">
                    <v-list-item-avatar>
                    <v-icon>{{ index + 1 }}</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title class="title-font">
                        <strong>{{ step.title }}</strong>
                    </v-list-item-title>
                    <v-list-item-title>
                        <v-container>
                        <v-row  class="subtitle-font">
                            {{ step.description }}
                        </v-row>
                        <v-row>
                            <img
                                class="animate__animated animate__fadeIn"
                                src="https://i.ytimg.com/vi/E9A8RRZ3Fmw/maxresdefault.jpg"
                                height="150"
                            >
                        </v-row>
                        </v-container>
                        
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TopicContentView",
  data() {
    return {
      steps: [
        {
          title: "Paso 1",
          description: "Abre tu hoja de cálculo de Excel."
        },
        {
          title: "Paso 2",
          description: "Selecciona la celda donde deseas mostrar la suma."
        },
        {
          title: "Paso 3",
          description: "Escribe la fórmula: =SUMA("
        },
        {
          title: "Paso 4",
          description: "Selecciona el rango de celdas que deseas sumar (por ejemplo, A1:A10)."
        },
        {
          title: "Paso 5",
          description: "Cierra el paréntesis y presiona Enter."
        },
        {
          title: "Paso 6",
          description: "El total aparecerá en la celda seleccionada."
        },
      ],
    };
  }
};
</script>

<style scoped>
.tutorial-view {
  padding: 20px;
  background-color: #f9f9f9;
}
.title-font {
  color: #008000;
  font-size: 1.5rem; /* Aumenta el tamaño de la fuente del título */
  font-weight: bold; /* Mantiene el texto en negrita */
}

.subtitle-font {
  font-size: 1.2rem; /* Aumenta el tamaño de la fuente del subtítulo */
  color: #555; /* Cambia el color del subtítulo si lo deseas */
}

</style>
