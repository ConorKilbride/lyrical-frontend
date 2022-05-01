<template>
    <b-container>

      <h2 class="textWhite">Artists</h2>
        
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
                    <!-- <p class="text-center textWhite"><b>Artist Name</b></p> -->
                    <router-link class="text-center textWhite" to="/artist">Artist Name</router-link>
                </b-card-text>
            </b-card>

            <div class="col-1"></div>
            
            <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-2 genreCard paddingTop"
            >
                <b-card-text>
                    <p class="text-center textWhite"><b>Artist Name</b></p>
                </b-card-text>
            </b-card>

            <div class="col-1"></div>
            
            <b-card

                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-2 genreCard paddingTop"
            >
                <b-card-text>
                    <p class="text-center textWhite"><b>Artist Name</b></p>
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
  name: 'Artists',
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