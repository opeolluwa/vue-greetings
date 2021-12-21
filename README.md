# Greetings vue

A vue component for greeting users

## Installation

```
npm install greetings-vue
```

## Registering as a global component

```js
import Vue from "vue";
import GreetingsVue from "greetings-vue";

Vue.component("greetings-vue", GreetingsVue);
```

## Local installation

````html
<template>
  <greeting-vue :username="username" />
</template>


<script>
import GreetingsVue from 'greetings-vue';
export default {
  data() {
    return {
      username: "Jane Doe",
    };
  },

  components: {
    GreetingsVue,
  },
};
</script>
````

