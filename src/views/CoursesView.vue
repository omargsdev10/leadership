<template>
  <v-container class="animate__animated animate__fadeIn">
    <h1 class="animate__animated animate__fadeIn">Oferta</h1>
    
    <p class="animate__animated animate__fadeIn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1200s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  </v-container>
  <v-carousel class="animate__animated animate__fadeIn">
      <!-- Slide 11 -->
      <v-carousel-item>
        <v-container>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <h2>Nuestros cursos de Excel</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <img
                class="animate__animated animate__fadeIn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png"
                height="120"
              >
              <h2>Excel básico</h2>
              <a href="https://pago.clip.mx/a4bc2013-fe18-456a-8c04-5fae0837fbfc">
                <img src="https://assets-global.website-files.com/62588b32d8d6105ab7aa9721/63bf568610f3fdf437235192_Preview.svg" />
              </a>
              <p class="scroll-p animate__animated animate__fadeIn">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </v-col>
            <v-col class="d-flex flex-column align-center">
              <img
                class="animate__animated animate__fadeIn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png"
                height="120"
              >
              <h2>Excel intermedio</h2>
              <v-btn @click="redirectToClip('a4bc2013-fe18-456a-8c04-5fae0837fbfc')" text class="text-white btn-curso animate__animated animate__bounceInDown" to="/course/topics">Comprar</v-btn>
              <p class="scroll-p animate__animated animate__fadeIn">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </v-col>
            <v-col class="d-flex flex-column align-center">
            <img
                class="animate__animated animate__fadeIn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png"
                height="120"
              >
              <h2>Excel experto</h2>
              <p class="scroll-p animate__animated animate__fadeIn">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>

      <!-- Slide 2 -->
      <v-carousel-item>
        <v-container>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <h2>Nuestros cursos de Word</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <img
                class="animate__animated animate__fadeIn"
                src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Microsoft-Word.png"
                height="120"
              >
              <h2>Excel básico</h2>
              <p class="scroll-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </v-col>
            <v-col class="d-flex flex-column align-center">
            <img
                class="animate__animated animate__fadeIn"
                src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Microsoft-Word.png"
                height="120"
              >
              <h2>Excel intermedio</h2>
              <p class="scroll-p animate__animated animate__fadeIn">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </v-col>
            <v-col class="d-flex flex-column align-center">
            <img
                class="animate__animated animate__fadeIn"
                src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Microsoft-Word.png"
                height="120"
              >
              <h2>Excel experto</h2>
              <p class="scroll-p animate__animated animate__fadeIn">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>

      <!-- Slide 3 -->
      <v-carousel-item>
        <v-container>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <h2>Nuestros cursos de Word</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <img
                class="animate__animated animate__fadeIn"
                src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Microsoft-Word.png"
                height="120"
              >
              <h2>Excel básico</h2>
              <p class="scroll-p animate__animated animate__fadeIn">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  name: 'CoursesView',
  methods: {
    redirectToClip(clipUrl) {
      window.open(`https://pago.clip.mx/${clipUrl}`, "_blank");
    }
  }
};
</script>

<style>
/* Customize carousel height */
.v-carousel {
  height: 500px !important;
}
.v-carousel-item {
  height: 400px; /* Adjust the height of each slide as needed */
  padding-left: 50px;
  padding-right: 50px;
}

.v-btn--variant-elevated, .v-btn--variant-flat {
    //background: #008000 !important;
    background: #103f91 !important;
}

.v-btn--variant-elevated, .v-btn--variant-flat v-btn__content .v-icon {
    color: white;
}

.v-carousel__controls {
  /* Si deseas cambiar el fondo de los controles también */
  //background-color: #008000 !important;
  background-color: #103f91 !important;
}

.btn-curso {
    margin-left: 5px;
    background-color: #ff5b00 !important;
}

.scroll-p {
  height: 100px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #81cbff #f1f1f1;
}
</style>