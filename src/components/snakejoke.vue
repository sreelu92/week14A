<template>
  <div>
    <h1>{{ snakeJoke }}</h1>
  </div>
</template>

<script>
export default {
  name: "snake-joke",
  computed: {
    snakeJoke() {
      return this.$store.getters.snake;
    }
  }
};
</script>

<style scoped>
</style>