<template>
    <v-container>
      <v-row justify="center" class="animate__animated animate__fadeIn">
        <v-col cols="12" md="6">
          <v-card class="login-container container-transparent">
            <br>
            <v-row justify="center"> 
              <v-img
              src="https://devjuiceblobstorage.blob.core.windows.net/devjuiceblobstorage/leadership/leadership.png"
              alt="Logo"
              max-width="100"
              class="mr-3 animate__animated animate__zoomIn"
            ></v-img>
            </v-row>
            
            <br>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-row>
                  <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="emailRules"
                    class="animate__animated animate__zoomIn"
                    required>
                    <template #append-inner>
                        <span style="font-size: 20px;">📧</span>
                    </template>
                  </v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    class="animate__animated animate__zoomIn"
                    type="password"
                    required>
                    <template #append-inner>
                        <span style="font-size: 20px;">🔑</span>
                    </template>
                  </v-text-field>  
                </v-row>
                <v-row justify="center">
                  <v-alert
                    v-if="message"
                    :type="messageType"
                    dismissible
                  >
                    {{ message }}
                  </v-alert>
                </v-row>
                <v-row justify="end"> <!-- Alinea el botón a la izquierda -->
                  <v-btn
                    class="btn-login capitalize btn-circle animate__animated animate__tada"
                    @click="login"
                    :disabled="!valid"
                  >
                    <v-icon>mdi-check</v-icon>
                    Ingresar
                  </v-btn>
                </v-row>
                <v-row justify="end">
                  <v-col class="animate__animated animate__zoomIn">
                    <a href="/forgot-password" class="forgot-password-link">🔐¿Olvidaste tu contraseña?</a>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <a href="/sign-up" class="forgot-password-link animate__animated animate__zoomIn">📕Registrate aquí</a>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import loginService from '../services/loginService';
  import cookieUtil from '../utils/cookieUtil';
  import { showSnackbar } from '@/stores/snackbarStore';

  export default {
    name: 'LoginView',
    data() {
      return {
        text: `Hello, I'm a snackbar`,
        email: 'tes@gmail.com',
        password: 'jaisjoimoi',
        message: '',
        messageType: 'success',
        valid: false,
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be at least 6 characters long',
        ],
      };
    },
    methods: {
      
      async login() {
        if (this.$refs.form.validate()) {
          const result = await loginService.login(this.email, this.password);
          if(result.isSuccess) {
            this.$router.push({name: 'home'});
            showSnackbar('Bienvenido 🥳', 'green', 'Ok');
          }
          else {
            showSnackbar('Ocurrió un problema 😢', 'red'); 
          //   this.message = result.message;
          //   this.messageType = 'error';
          }
          // Call an API or perform actions to authenticate the user
        }
      },

      //User
       async fetchData() {
        try {
          const response = await loginService.get('/User');
          this.apiData = response.data;
          console.log(this.apiData);
          
        } catch (error) {
          console.error(error);
        }
      }

    },
    mounted() {
      this.fetchData();
      console.log("eventBus1111");
      console.log(cookieUtil.isAuthenticated());
    },

  };
  </script>
  
  <style>
  .v-card {
    padding: 20px;
  }
  .login-container {
    color: white;
    /* //background: linear-gradient(to bottom, #008000, #004d00); Degradado de verde claro a oscuro */
    /* background: linear-gradient(to bottom, #103f91, #41a5ee); Degradado de verde claro a oscuro */
    /* background-image: linear-gradient(to right top, #0a63ff, #0096ff, #00b3f1, #00c592, #0fcf0f); */
    max-height: 100vh; /* Para cubrir toda la altura de la pantalla */
  }
  .btn-login .v-btn__content{
    color: white !important;
  }
  .forgot-password-link {
    color: #fff;
    text-decoration: none;
  }

  .forgot-password-link:hover {
    text-decoration: underline; /* Subrayado al pasar el mouse */
  }
  </style>
  