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
  props: {
    username: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.vue__greetings {
  text-transform: capitalize;
  font-size: 80%;
}
</style>