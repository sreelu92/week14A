<template>
  <div>
    <input type="button" value="Get New Joke" @click="getJoke" />
    <input type="button" value="Loud Joke" @click="getLoud()"/>
    <input type="button" value="Snake Joke" @click="getSnake()"/>
    <input type="button" value="Normal Joke" @click="getNormal()"/>


    <h3>{{ joke }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "new-joke",
  data() {
    return {
      joke: " ",
      loud:"loud",
      snake:"snake",
      normal:"normal"
    };
  },
  methods: {
    getJoke: function() {
      
      axios
        .request({
          url: " https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET"
        })
        .then(response => {
          console.log(response);
          this.joke = response.data.joke;
          this.$store.commit("toStore",this.joke);

        })
        .catch(error => {
          console.log(error);
        });

    },
    getLoud:function() {
        this.$store.commit("changeLoud",this.loud);
        console.log(this.loud);
       
    },
    getSnake:function() {
        this.$store.commit("changeSnake",this.snake);
        console.log(this.snake);
       
    },
    getNormal:function() {
        this.$store.commit("changeNormal",this.normal);
        console.log(this.normal);
       
    },


    
  },
   

  computed: {
    updateStore: function() {
      return this.$store.state.jokes;

    }
  }
};
</script>

<style scoped>
</style>