<template>
  <div>
    <h1>{{NormalJoke}}</h1>
  </div>
</template>

<script>
export default {
  name: "normal-joke",
   computed: {
    NormalJoke() {
      return this.$store.state.jokes;
    }
  }
  
  
  
  
};
</script>

<style scoped>
</style>