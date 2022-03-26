<template>
    <b-col>
    <h2></h2>

    <div v-if="!loggedIn">
      Email: <input type="email" v-model="form.email" /> <br>
      Password: <input type="password" v-model="form.password" />
      <button @click="login()">Submit</button>
    </div>

    <p v-else>
      You are logged in
    </p>

  </b-col>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {
      form: {
        "email":"sam@bloggs.com",
        "password":"secret"
      }
    }
  },
  methods:{
    login(){
       axios
    //     .post('https://college-api-mo.herokuapp.com/api/login', {
    //       email: this.form.email,
    //       password: this.form.password
    //     })
        .then(response => {
          // console.log(response.data.token)
          this.$emit('login', response.data.token)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
}

</script>

<style>

</style>