<script>
import Vue from "vue";
import VueGreetings from "@/VueGreetings.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueGreetings,
  },
});
</script>

<template>
  <div id="app">
    <vue-greetings />
  </div>
</template>
