<template>
  <v-container class="course-topics-container">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Contenido del curso</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-list>
          <v-list-item
            v-for="(topic, index) in topics"
            :key="index"
            @click="toggleDetails(index)"
            class="topic-item"
          >
            <v-list-item-content>
              <v-list-item-title>
              <v-icon left :style="{ color: '#008000' }">{{ topic.showDetails ? 'mdi-book-open' : 'mdi-book' }}</v-icon>
                {{ topic.title }}
              <v-icon left :style="{ color: '#008000' }">mdi-check</v-icon>
              </v-list-item-title>
              <v-list-item-title v-if="topic.showDetails">
                <v-card>
                  <v-row>
                    {{ topic.description }}
                  </v-row>
                  <v-row justify="end">
                    <v-btn text x-small
                       style="text-transform: none; background-color: #008000; color: white;"
                      class="btn-content animate__animated animate__tada"
                      to="/course/topics/content"
                    >
                      Ver contenido
                    </v-btn>
                  </v-row>
                </v-card>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CourseTopicsView',
  data() {
    return {
      topics: [
        {
          title: "Introducción a Excel",
          description: "Conoce la interfaz de usuario de Excel, las barras de herramientas, celdas y hojas de cálculo.",
          showDetails: false,
        },
        {
          title: "Fórmulas y Funciones Básicas",
          description: "Aprende a usar las fórmulas y funciones más comunes, como SUMA, PROMEDIO y CONTAR.",
          showDetails: false,
        },
        {
          title: "Formato de Celdas y Hojas de Cálculo",
          description: "Domina el formato de celdas, aplicando colores, bordes y estilos a los datos.",
          showDetails: false,
        },
        {
          title: "Manejo de Filas y Columnas",
          description: "Inserta, elimina y ajusta el tamaño de filas y columnas para organizar mejor la información.",
          showDetails: false,
        },
        {
          title: "Uso de Filtros y Ordenación de Datos",
          description: "Aprende a filtrar y ordenar datos para encontrar rápidamente información relevante.",
          showDetails: false,
        },
        {
          title: "Creación de Gráficos Básicos",
          description: "Genera gráficos simples como barras, líneas y pasteles para representar datos visualmente.",
          showDetails: false,
        },
        {
          title: "Referencias Relativas y Absolutas",
          description: "Descubre cómo usar referencias relativas y absolutas en las fórmulas para agilizar cálculos.",
          showDetails: false,
        },
        {
          title: "Administración de Hojas de Cálculo",
          description: "Aprende a gestionar varias hojas en un libro, moverlas, renombrarlas y vincular datos entre ellas.",
          showDetails: false,
        },
        {
          title: "Atajos de Teclado para Aumentar la Productividad",
          description: "Descubre los atajos de teclado más útiles para realizar tareas comunes de manera más rápida.",
          showDetails: false,
        },
        {
          title: "Impresión de Hojas de Cálculo",
          description: "Configura correctamente las hojas de cálculo para su impresión, ajustando márgenes, tamaño de página y más.",
          showDetails: false,
        }

      ],
    };
  },
  methods: {
    toggleDetails(index) {
      this.topics[index].showDetails = !this.topics[index].showDetails;
    },
  },
};
</script>

<style>
.course-topics-container {
  margin-top: 50px;
}

.topic-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.topic-item:hover {
  background-color: #f0f0f0;
}

.v-list-item-subtitle {
  color: #555;
  font-size: 14px;
}

.v-icon {
  margin-right: 8px; /* Add space between icon and title */
}
.btn-content {
    background-color: #008000 !important;
  }
  .btn-content .v-btn__content{
    color: white !important;
  }
</style>
