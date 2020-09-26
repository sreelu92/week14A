<template>
  <div>
    <h1>{{ louder }}</h1>
  </div>
</template>

<script>
export default {
  name: "loud-joke",

  
  computed: {
    louder: function() {
      return this.$store.getters.loud;
    }
  }
};
</script>

<style scoped>
</style>