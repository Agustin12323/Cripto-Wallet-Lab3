<template>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
  
        <!-- Icono -->
        <div class="fadeIn first">
          <img :src="require('../assets/login_person.png')" id="icon" alt="User Icon" />
        </div>
  
        <!-- Login Form -->
        <form @submit.prevent="login">
          <input type="text" id="login" class="fadeIn second" v-model="username" placeholder="usuario">
          <input type="password" id="password" class="fadeIn third" v-model="password" placeholder="contraseña">
          <input type="submit" class="fadeIn fourth" value="Iniciar Sesión">
        </form>
  
        <!-- Remind Password -->
        <div id="formFooter">
          <a class="underlineHover" href="#">¿Ha olvidado su contraseña?</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage', 
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
       
        if (this.username === 'admin' && this.password === '1234') {
          this.$router.push('/my-wallet'); 
        } else {
          alert('Credenciales incorrectas');
        }
      },
    },
  };
  </script>
  