<template>
  <div>
    <input type="button" value="Get New Joke" @click="getJoke" />
    <h3>{{ joke }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "new-joke",
  data() {
    return {
      joke: " "
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

    }
   
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