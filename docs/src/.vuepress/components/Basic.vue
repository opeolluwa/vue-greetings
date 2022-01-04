<template>
  <div class="vue__greetings">{{ message }}</div>
</template>

<script>
const { message } = require("./greeting");
export default {
  data() {
    return {
      message,
    };
  },
  //TODO:
  props: {
    username: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
</style>