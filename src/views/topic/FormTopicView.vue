<template>
  <v-container>
    <v-row>
      <h2>Nueva materia</h2>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <StepperHeaderComponent
        v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :icon-color="item.icon_color"
          :card-color="item.color"
      ></StepperHeaderComponent>
    </v-row>
  </v-container>
  <v-container v-if="step === 1">
    <div>
      <v-card style="border: 1px solid; border-color: orange !important;">
        <h3>Materia</h3>
        <p>Después de este paso tu materia será creada en estatus de "Borrador" hasta que estes seguro de haberla completado a tu manera.</p>
      </v-card>
    </div>
    <div style="padding-top: 15px;">
      <v-form @submit.prevent>
        <v-row>
          <v-col cols="4">
            <v-text-field label="Nombre" v-model="nombreMateria"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-container>
  <v-container v-if="step === 2">
    <v-col>
      <v-row>
        <div border="none">
          <h1>Temas / Contenido</h1>
        </div>
      </v-row>
      <v-row>
        <div class="text-subtitle-2 mb-2">Default</div>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="Item"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-container>
  <v-container v-if="step === 3">
    <v-col>
      <div border="none">
        <h1>Preview</h1>
      </div>
    </v-col>
  </v-container>
  
  <v-container>
    <v-row>
      <v-col v-if="step > 1" class="d-flex justify-start">
        <v-btn color="primary"
        class="btn-step"
        @click="previousStep()">
          <v-icon style="font-size: 30px;">mdi-chevron-left</v-icon>
          Regresar
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn v-if="step < items.length"
          color="#103f91"
          class="btn-step"
          @click="nextStep()">
            Siguiente
            <v-icon style="font-size: 30px;">mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn v-if="step == items.length"
          color="#103f91"
          class="btn-step"
          style="padding-bottom: 5px; height: 40px; background-color: #008000;"
          @click="nextStep()">
            <v-icon style="font-size: 25px;">mdi-check</v-icon>
            Finalizar  
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  
</template>


<script>
import StepperHeaderComponent from '../../components/stepper/stepper-header.vue'
export default {
  name: "FormTopicView",
  components:{
    StepperHeaderComponent
  },
  data () {
    return {
      step: 1,
      items: [
        { title: 'Materia', value: 1, color: '#103f91', icon:'mdi-pencil-circle', icon_color: '#ffd700', validated: false },
        { title: 'Contenido', value: 2, icon: 'mdi-circle-outline', icon_color: '#a1a1a1', validated: false },
        { title: 'Resumen', value: 3, icon: 'mdi-circle-outline', icon_color: '#a1a1a1', validated: false }
      ],
      unsuccess_item: {
        icon: 'mdi-circle-outline',
        icon_color: '#a1a1a1'
      },
      nombreMateria: null,
    }
  },
  methods: {
    previousStep() {
      if (this.step > 1)
        this.step--;
      this.updateToSuccess();
    },
    nextStep() {
      if (this.step == 1)
      {
        console.log("a crear"); 
      }
      if (this.step <= this.items.length-1)
        this.step++;
      this.updateToSuccess();
    },
    updateToSuccess()
    {
      this.items.forEach((i) => {
        if(i.value < this.step + 1)
        {
          i.icon_color = '#00ff00';
          i.color = '#103f91';
          i.icon = 'mdi-check-circle'
          i.validated = true;
          if(i.value == this.step)
          {
            i.icon = 'mdi-pencil-circle'
            i.icon_color = '#ffd700';
            i.validated = false;
          }
        }
        else
        {
          i.icon_color = this.unsuccess_item.icon_color;
          i.color = this.unsuccess_item.color;
          i.icon = this.unsuccess_item.icon;
        }
      });
    }
  },
  props: {onclick: () => {console.log("EVento")} }
}
</script>
<style>
  .btn-step {
    font-size: 16px;
    padding-top: 5px;
    padding-bottom: 35px;
    text-transform: capitalize;
  }
  .icon-title {
    font-size: 24px;
  }
  .card-title {
    font-size: 18px;
  }
</style>