<template>
  <div>
       age is {{age}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      date : new Date()
    };
  },
  props: {
    username: {
      type: String,
      required: false,
    },
  },
  created(){
      this.age = 76
  }
};
</script>

<style scoped>
</style>