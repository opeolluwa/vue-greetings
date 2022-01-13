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
## Support me 
<h1 style="font-weight:800">Hi, I'm Opeoluwa! 👋</h1>
I'm a full stack developer devoted to building community project...


If you find the plugin helpful, consider [buying me a pizza 🍕](https://getfidia.com/pay/opeolluwa/open-source)





