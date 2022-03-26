<template>
  <!-- <b-container class="bgBlue"> -->
    <b-row class="bgBlue">
      <b-col>
        <NavBar :loggedIn="loggedIn" v-on:logout="setLoggedOut" />
        <br>
        <router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" v-on:invalid-token="setLoggedOut" />
      </b-col>
    </b-row> 
  <!-- </b-container> -->
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created(){
    localStorage.getItem('token') ? this.loggedIn = true : this.loggedIn = false
  },
  methods:{
    setLoggedIn(token){
      this.loggedIn = true
      localStorage.setItem('token', token)
    },
    setLoggedOut(){
      this.loggedIn = false
      localStorage.removeItem('token')
      this.$router.replace({name: 'home'})
    }
  }
}
</script>

<style>

@import './assets/css/MyStyle.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
