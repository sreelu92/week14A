<template>
  <div>
    <new-joke></new-joke>
    <loud-joke v-if="getChoice=='loud'"></loud-joke>
    <snake-joke v-else-if="getChoice=='snake'" ></snake-joke>
    <normal-joke v-else-if="getChoice=='normal'"></normal-joke>

  </div>
</template>

<script>
import NewJoke from "./components/newjoke.vue";
import LoudJoke from "./components/loudjoke.vue";
import SnakeJoke from "./components/snakejoke.vue";
import NormalJoke from "./components/normaljoke.vue";
export default {
  name: "App",
  components: {
    NewJoke,
    LoudJoke,
    SnakeJoke,
    NormalJoke
  },
  computed: {
    getChoice() {
      return this.$store.state.choice;



    }
  }
  
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
