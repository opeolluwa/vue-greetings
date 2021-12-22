# Vue Greetings

A vue component that returns greeting based on day, time and season. Ideal for welcome messages in dashboard and user profile 

## Installation

```bash
npm install vue-greetings
``` 

## Register as a Global Component

```js
import Vue from "vue";
import GreetingsVue from "greetings-vue";

Vue.component("greetings-vue", GreetingsVue);
```

## Register as Local Component

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vue-greetings/>
  </div>
</template>




<script>
import VueGreetings from "vue-greetings"
export default {
  components:{
 VueGreetings
  }
}
</script>
```





