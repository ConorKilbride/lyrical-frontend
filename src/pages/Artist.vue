<template>
    <b-container>

      <h2 class="textWhite">This is the Artist page</h2>
        
      <div>
        <b-col>
          <b-row cols="3" class="padding">
            <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-2 genreCard paddingTop"
            >
                <b-card-text>
                    <router-link class="text-center textWhite" to="/album">Album</router-link>
                </b-card-text>
            </b-card>
          </b-row>
        </b-col>
    </div> 

    </b-container>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'Artist',
  components: {
  },
  props: {
    loggedIn: Boolean
  },
  data(){
    return {

    }
  },
  methods:{
  }
}

</script>

<style>

</style>