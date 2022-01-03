# Integration

Quicly integrate [vue-greetings](htttps://github.com/opeolluwa/vue-greetings) into your projects

## Register as a global component

```js
import Vue from "vue";
import VueGreeting from "VueGreeting";
Vue.component("vue-greeting", VueGreeting);
```

**then in vue components**

```html
<vue-greeting></vue-greeting>
```

## Register as Local Component

```html
<template>
  <div>
    <vue-greetings />
  </div>
</template>

<script>
  import VueGreetings from "vue-greetings";
  export default {
    components: {
      VueGreetings,
    },
  };
</script>
```
