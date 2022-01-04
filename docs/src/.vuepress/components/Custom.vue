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
.vue__greetings {
  font-size: 60% text-transform;
  color: #660066;
  display: inline;
  font-family: monospace;
  font-weight: bolder;
  padding: 3px;
  width: 45%;
}
</style>