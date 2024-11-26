import { reactive } from 'vue';

export const snackbarStore = reactive({
  isVisible: false,
  message: '',
  color: 'success',
  btnTitle: 'cerrar'
});

export const showSnackbar = (message, color = 'success', btnTitle = 'Cerrar') => {
  snackbarStore.message = message;
  snackbarStore.color = color;
  snackbarStore.isVisible = true;
  snackbarStore.btnTitle = btnTitle;
};