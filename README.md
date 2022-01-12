# Vue Greetings

A vue component that returns greeting based on day, time and season. Ideal for welcome messages in dashboard and user profile 

## Installation
- Vue CLI
```bash
npm install vue-greetings
``` 
- script tag
```html
<script src="https://unpkg.com/vue-greetings@0.1.7/dist/vue-greetings.min.js"></script>
```
## Basic Use
- Register as a global component
```js
import Vue from "vue";
import VueGreeting from "VueGreeting";
Vue.component("vue-greeting", VueGreeting);
```
then in vue components
```html
<vue-greeting></vue-greeting>
```

- Register as Local Component
```html
<template>
  <div>
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
If the plugin has helped in some way, consider [buying me a coffee ☕](https://getfidia.com/pay/opeolluwa/Opeolluwa)
## Demo
See live [demo](https://vue-greetings.vercel.app/)



