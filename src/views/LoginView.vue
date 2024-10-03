<template>
    <v-container>
      <v-row justify="center" class="animate__animated animate__fadeIn">
        <v-col cols="12" md="6">
          <v-card class="login-container">
            <br>
            <v-row justify="center"> 
              <v-img
              src="https://devjuiceblobstorage.blob.core.windows.net/devjuiceblobstorage/leadership/leadership.png"
              alt="Logo"
              max-width="100"
              class="mr-3"
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
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    required
                  ></v-text-field>  
                </v-row>
                <v-row justify="end"> <!-- Alinea el botón a la izquierda -->
                  <v-btn
                    class="btn-login animate__animated animate__tada"
                    @click="login"
                    :disabled="!valid"
                  >
                    Ingresar
                  </v-btn>
                </v-row>
                <v-row justify="end">
                  <v-col>
                    <a href="/forgot-password" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
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
      login() {
        if (this.$refs.form.validate()) {
          // Handle the login logic here
          console.log('Email:', this.email);
          console.log('Password:', this.password);
          // Call an API or perform actions to authenticate the user
        }
      },
    },
  };
  </script>
  
  <style>
  .v-card {
    padding: 20px;
  }
  .login-container {
    color: white;
    background: linear-gradient(to bottom, #008000, #004d00); /* Degradado de verde claro a oscuro */
    max-height: 100vh; /* Para cubrir toda la altura de la pantalla */
  }
  .btn-login {
    background-color: #ff5b00 !important;
  }
  .btn-login .v-btn__content{
    color: white !important;
  }
  .forgot-password-link {
    color: #fff; /* Color verde */
    text-decoration: none;
  }

  .forgot-password-link:hover {
    text-decoration: underline; /* Subrayado al pasar el mouse */
  }
  </style>
  