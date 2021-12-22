<template>
  <div>{{ message }}</div>
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
div {
  text-transform: capitalize;
}
</style>