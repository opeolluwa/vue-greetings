<template>
  <div>age is {{ message }}</div>
</template>

<script>
const { message } = require("./greets");
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
</style>