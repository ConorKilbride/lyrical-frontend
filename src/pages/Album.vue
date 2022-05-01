<template>
    <b-container>

      <h2 class="textWhite">This is the Album page</h2>
        
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
                    <router-link class="text-center textWhite" to="/song">Song 1</router-link>
                    <p class="text-center textWhite"><b>Song 2</b></p>
                    <p class="text-center textWhite"><b>Song 2</b></p>
                    <p class="text-center textWhite"><b>Song 2</b></p>
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
  name: 'Album',
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