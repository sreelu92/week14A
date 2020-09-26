<template>
  <div>
    <h1>{{ louder }}</h1>
  </div>
</template>

<script>
export default {
  name: "loud-joke",

  //   data: function() {
  //     return {
  //       louder: this.$store.getters.loud
  //     }
  //   },
  //   computed: {
  //     loudUpdate:function() {
  //       return this.$store.state.jokes;
  //     }
  //   }
  computed: {
    louder: function() {
      return this.$store.getters.loud;
    }
  }
};
</script>

<style scoped>
</style>