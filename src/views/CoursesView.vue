<template>
  <v-container class="animate__animated animate__fadeIn">
    <h1 style="color: #103f91" class="animate__animated animate__fadeIn">Productos</h1>
    
    <p class="animate__animated animate__fadeIn" style="text-align: justify;">
      Bienvenidos a nuestra sección de cursos, diseñada especialmente para ti. Aquí encontrarás una variedad de programas educativos cuidadosamente desarrollados para ayudarte a alcanzar tus metas y expandir tus conocimientos. Desde habilidades técnicas hasta desarrollo personal, cada curso está pensado para ofrecerte el mejor aprendizaje, con materiales de calidad y acceso desde cualquier lugar. Explora nuestras opciones y comienza hoy tu camino hacia el éxito.
    </p>
    <v-bottom-sheet>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Click Me"></v-btn>
      </template>

      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12">
              <p>
                Bienvenidos a nuestra sección de cursos, diseñada especialmente para ti. Aquí encontrarás una variedad de programas educativos cuidadosamente desarrollados para ayudarte a alcanzar tus metas y expandir tus conocimientos. Desde habilidades técnicas hasta desarrollo personal, cada curso está pensado para ofrecerte el mejor aprendizaje, con materiales de calidad y acceso desde cualquier lugar. Explora nuestras opciones y comienza hoy tu camino hacia el éxito.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-bottom-sheet>
  </v-container>
  <v-carousel class="animate__animated animate__fadeIn" style="height: 1300px;">
      <v-carousel-item v-for="n in calcularSlides()" :key="n">
        <v-container>
          <v-row>
            <v-col v-for="c in getCursosByIndex(n)" :key="c" class="d-flex flex-column" style="margin-left: 25px !important; margin-right: 25px !important;">
              <v-card class="container-transparent-white" style="border: 2px solid #103f91; border-radius: 15px; min-height: 657px;">
                <v-row class="d-flex flex-column align-center">
                    <img
                      class="animate__animated animate__fadeIn"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png"
                      height="110"
                    >
                </v-row>
                <v-row class="d-flex flex-column align-center">
                  <h2>{{ c.title }}</h2>
                </v-row>
                <v-row class="d-flex justify-end">
                  <v-badge class="badge-topic"
                  floating color="info" v-for="m in c.topics" :key="m" :content="m.courseType">
                    <v-chip>
                      📗{{ m.topic }}
                    </v-chip>
                  </v-badge>
                </v-row>
                <v-row class="d-flex flex-column" style="padding-top: 15px;">
                  <h2 class="amount">${{ c.cost }}</h2>
                </v-row>
                <v-row class="d-flex justify-end align-center">
                  <label class="label-small" v-if="c.numPartialities != null && c.numPartialities > 1">Puedes pagar con {{ c.numPartialities }} parcialidades de ${{ c.costParciality }}</label>
                  <label class="label-small" v-if="c.reservationFee != null && c.reservationFee > 0">*Puedes realizar un apartado con un anticipo de ${{ c.reservationFee }}</label>
                </v-row>
                <v-row>
                  <v-col cols="3" class="d-flex justify-end align-center">
                    <v-icon style="color: #ff5b00" size="42px">mdi-cart-minus</v-icon>
                  </v-col>
                  <v-col cols="9">
                    <v-btn @click="redirectToClip('a4bc2013-fe18-456a-8c04-5fae0837fbfc')" text class="text-white btn-circle btn-curso animate__animated animate__bounceInDown" to="/course/topics">
                      <v-icon>mdi-credit-card</v-icon>
                      Comprar
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="d-flex flex-column align-center">
                  <p style="max-height: 240px; overflow-y: auto; text-align: justify;" class="scroll-p animate__animated animate__fadeIn">
                    {{ c.description }}
                  </p>
                </v-row>
                <v-row class="d-flex flex-column align-center">
                  <!-- <v-btn @click="redirectToClip('a4bc2013-fe18-456a-8c04-5fae0837fbfc')" text class="text-white animate__animated animate__bounceInDown" to="/course/topics">
                    <v-icon style="color: #fff" size="32px">mdi-book-open-outline</v-icon> Ver temario
                  </v-btn> -->
                  <v-bottom-sheet>
                    <template v-slot:activator="{ props }">
                      <!-- <v-btn v-bind="props" text="Click Me"></v-btn> -->
                      <v-btn style="position: absolute; bottom: 16px; transform: translateX(-50%);" v-bind="props" text class="text-white capitalize btn-circle animate__animated animate__bounceInDown">
                        📖 Ver temario
                      </v-btn>
                    </template>

                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, metus vel efficitur efficitur, velit urna viverra leo, eget pharetra lorem ante a ligula. Integer nec magna a nulla varius laoreet.



                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, metus vel efficitur efficitur, velit urna viverra leo, eget pharetra lorem ante a ligula. Integer nec magna a nulla varius laoreet.




                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, metus vel efficitur efficitur, velit urna viverra leo, eget pharetra lorem ante a ligula. Integer nec magna a nulla varius laoreet.




                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, metus vel efficitur efficitur, velit urna viverra leo, eget pharetra lorem ante a ligula. Integer nec magna a nulla varius laoreet.
                            </p>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-bottom-sheet>

                </v-row>
              </v-card>
              
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
import courseService from '../services/courseService';
export default {
  name: 'CoursesView',
  data() {
    return {
      slides: 3,
      courses: []
    }
  },
  methods: {
    redirectToClip(clipUrl) {
      window.open(`https://pago.clip.mx/${clipUrl}`, "_blank");
    },
    async getActive() {
      const response = await courseService.getAll();
      this.courses = response.data;
    },
    calcularSlides() {
      return this.courses.length <= this.slides ? 1 : Math.ceil(this.courses / this.slides);
    },
    getCursosByIndex(index) {
      return this.courses.slice(index - 1, index + this.slides-1);
    }
  },
  mounted() {
    this.getActive();
  }
};
</script>

<style>
.badge-topic {
  margin-left: 20px;margin-top: 10px; right: 0px !important; left: none;
}
.v-badge__badge {
  right: 0px !important;
  left: 40px !important;
}
.amount { text-align: right; color: #103f91; }
.label-small { font-size: 12px; color: gray; }
/* Customize carousel height */
.v-carousel {
  height: 750px !important;
}
.v-carousel-item {
  height: 700px; /* Adjust the height of each slide as needed */
  padding-left: 50px;
  padding-right: 50px;
}

.v-btn--variant-elevated, .v-btn--variant-flat {
    background: #103f91;
}

.v-btn--variant-elevated, .v-btn--variant-flat v-btn__content .v-icon {
    color: white;
}

.v-carousel__controls {
  /* Si deseas cambiar el fondo de los controles también */
  /* //background-color: #008000 !important; */
  background-color: #103f91 !important;
}

.btn-curso {
    margin-left: 5px;
    background-color: #ff5b00 !important;
    width: 100%;
    height: 40px !important;
    border-radius: 13px;
    text-transform: none;
    font-size: 18px;
}

.scroll-p {
  height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #81cbff #f1f1f1;
}
</style>