<template>
    <v-container>
      <v-row justify="center" class="animate__animated animate__fadeIn">
        <v-col cols="12" md="10" sm="12" xs="12">
          <v-card style="max-height: 100%; overflow-y: auto;" class="login-container container-transparent">
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
                    <v-col class="animate__animated animate__zoomIn">
                        <p>Ingresa los siguientes datos para que te puedas unir a nuestra plataforma</p>
                    </v-col>
                </v-row>
                 <!-- Agrupa las columnas dentro de un contenedor v-row -->
                <v-row>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Nombre *"
                            v-model="name"
                            :rules="namesRules"
                            required
                            @input="filterLetters('name')">
                            <template #append-inner>
                                <span style="font-size: 20px;">👤</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Apellido paterno *"
                            v-model="fatherLastName"
                            :rules="namesRules"
                            required
                            @input="filterLetters('fatherLastName')">
                            <template #append-inner>
                                <span style="font-size: 20px;">🧔🏽‍♂️</span>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Apellido materno *"
                            v-model="motherLastName"
                            :rules="namesRules"
                            required
                            @input="filterLetters('motherLastName')">
                            <template #append-inner>
                                <span style="font-size: 20px;">👩🏽</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Email *"
                            v-model="email"
                            :rules="emailRules"
                            required>
                            <template #append-inner>
                                <span style="font-size: 20px;">📧</span>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="4" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="CURP *"
                            v-model="curp"
                            :rules="curpRules"
                            @input="curpToUppercase"
                            required>
                            <template #append-inner>
                                <span style="font-size: 20px;">🪪</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="4" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Contraseña *"
                            v-model="password"
                            :rules="passwordRules"
                            type="password"
                            required>
                            <template #append-inner>
                                <span style="font-size: 20px;">🔑</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Confirmación de contraseña *"
                            v-model="confirmPassword"
                            :rules="passwordRules"
                            type="password"
                            required>
                            <template #append-inner>
                                <span style="font-size: 20px;">🔑</span>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Telefono *"
                            v-model="phone"
                            :rules="phoneRules"
                            required
                            @input="formatPhone">
                            <template #append-inner>
                                <span style="font-size: 20px;">📱</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Puesto"
                            v-model="position"
                            :rules="positionRules">
                            <template #append-inner>
                                <span style="font-size: 20px;">🛠️</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="12" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Empresa o institución"
                            v-model="company"
                            :rules="companyRules">
                            <template #append-inner>
                                <span style="font-size: 20px;">🏢</span>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" sm="12" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="Intereses educativos"
                            v-model="educationalInterest"
                            :rules="educationalInterestRules">
                            <template #append-inner>
                                <span style="font-size: 20px;">🎒</span>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12" xs="12">
                        <v-text-field
                            class="animate__animated animate__zoomIn"
                            label="¿Comó nos encontraste?"
                            v-model="howDidYouKnowAboutUs"
                            :rules="howDidYouKnowAboutUsRules"
                            required>
                            <template #append-inner>
                                <span style="font-size: 20px;">🔍</span>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="start" class="animate__animated animate__zoomIn">
                    <v-checkbox>
                        <template #label>
                            Acepto &nbsp;
                            <a href="https://example.com/terms" target="_blank" style="color: inherit; text-decoration: underline;">
                            términos y condiciones
                            </a>
                        </template>
                    </v-checkbox>
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
                    class="btn-login btn-circle capitalize animate__animated animate__tada"
                    @click="create"
                  >
                    <v-icon>mdi-check</v-icon>
                    Registrarme
                  </v-btn>
                </v-row>
                <v-row justify="center">
                  <a href="/login" class="forgot-password-link animate__animated animate__tada">⏏️ Ingresa aquí</a>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import userService from '../../services/userService';
  export default {
    name: 'PublicRegisterView',
    data() {
        return {
            name: null,
            fatherLastName: null,
            motherLastName: null,
            namesRules: [
                (v) => !!v || "El nombre es obligatorio.",
                (v) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(v) || "Solo se permiten letras.",
            ],
            email: null,
            emailRules: [
                v => !!v || 'El correo electrónico es necesario',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            curp: null,
            curpRules: [
                (v) => !!v || "La CURP es necesaria.",
                (v) => v && v.length === 18 || "La CURP debe tener 18 carácteres.",
            ],
            password: null,
            confirmPassword: null,
            passwordRules: [
                v => !!v || 'Ingresa una contraseña válida'
            ],
            phone: null,
            phoneRules: [
                (v) => !!v || "El número de teléfono es obligatorio.",
                (v) => /^[\d\s-]*$/.test(v) || "Solo se permiten números.",
                (v) => v.replace(/\D/g, "").length === 10 || "El número debe tener 10 dígitos.",
            ],
            company: null,
            companyRules: [],
            position: null,
            positionRules: [],
            educationalInterest: null,
            educationalInterestRules: [],
            howDidYouKnowAboutUs: null,
            howDidYouKnowAboutUsRules: []
        }
    },
    methods: {
        async create() {
            if (this.$refs.form.validate()) {
                let data = this.createPayLoad();
                const result = await userService.post(data);
                if(result.isSuccess) {
                    this.$router.push({name: 'login'});
                }
                else {
                    this.message = result.message;
                    this.messageType = 'error';
                }
            }
        },
        createPayLoad() {
            return {
                name: this.name,
                fatherLastName: this.fatherLastName,
                motherLastName: this.motherLastsName,
                email: this.email,
                curp: this.curp,
                password: this.password,
                confirmPassword: this.confirmPassword,
                phone: this.phone,
                company: this.company,
                position: this.position,
                educationalInterest: this.educationalInterest,
                howDidYouKnowAboutUs: this.howDidYouKnowAboutUs
            };
        },
        formatPhone() {
        // Eliminar todos los caracteres no numéricos
        const digits = this.phone.replace(/\D/g, "");

        // Aplicar formato dinámico (222-123 12 12)
        if (digits.length <= 3) {
            this.phone = digits;
        } else if (digits.length <= 6) {
            this.phone = `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else if (digits.length <= 8) {
            this.phone = `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6)}`;
        } else {
            this.phone = `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
        }
        },
        filterText(value, regex) {
            return value.replace(regex, "");
        },
        filterLetters(fieldName) {
            this[fieldName] = this.filterText(this[fieldName], /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g);
        },
        curpToUppercase() {
          this.curp = this.curp.toUpperCase();
        }
    },
  };
  </script>
  