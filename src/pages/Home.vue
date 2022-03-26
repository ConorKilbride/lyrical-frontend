<template>
    <b-container class="bgBlue">
        <div class="bannerBlue textWhite text-center">
            <h2>Lyrical</h2>
            <p>Welcome to Lyrical, the hub for all your music needs!</p>
            <p class="paddingBottom">
                Ever had a lyric stuck in your head and couldn't remember the song? 
                Or just want to learn more about an artist you like? <br>
                Look no further because this is the place for you.
            </p>
        </div>
        <br>
        <div class="darkBlue">
            <h2 class="textWhite paddingLeft">New Releases</h2>
            <div class="row">
                <div class="col-sm nrBoxBlue">
                    <div class="grey text-center tempImgBox padding">
                        <p>Image</p>
                    </div>
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                </div>
                <div class="col-sm nrBoxBlue">
                    <div class="grey text-center tempImgBox">
                        <p>Image</p>
                    </div>
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                </div>
                <div class="col-sm nrBoxBlue">
                    <div class="grey text-center tempImgBox">
                        <p>Image</p>
                    </div>
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                </div>
            </div>
            <br>
        </div>
        <br>
        <br>
        <div class="row">
            <div class="nrBoxBlue col-7">
                <h2 class="textWhite paddingLeft">Top This Week</h2>
                <div class="ttwLightBlue padding">
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                    <br>
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                    <br>
                    <p class="text-center textWhite">
                        Title of album or song
                        <br>
                        Artist
                    </p>
                    <br>
                </div>
            </div>

            <div class="nrBlueBox col-5">
                <h2 class="textWhite paddingLeft">Editors Choice</h2>
                <div class="ttwLightBlue padding">
                    <div class="">
                        <div>

                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        <br>
    </b-container>
</template>

<script>

export default {
  name: 'Home',
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