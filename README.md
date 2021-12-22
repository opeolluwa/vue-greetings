# Greetings vue

A vue component for greeting users

## Installation

```
npm install greetings-vue
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
  <greeting-vue />
</template>

<script>
  import GreetingsVue from 'greetings-vue';
  export default {
    ...
    components: {
      GreetingsVue,
    }
    ...
  };
</script>
```
