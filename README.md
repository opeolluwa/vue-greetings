# Vue Greetings

A Vue 3 component that returns greeting based on day, time and season. Ideal for welcome messages in dashboard and user profile.

## Installation

```bash
pnpm add vue-greetings
```

## Usage

### Plugin (Global Registration)

```ts
import { createApp } from 'vue'
import VueGreetings from 'vue-greetings'
import App from './App.vue'

const app = createApp(App)
app.use(VueGreetings)
app.mount('#app')
```

Then in any component:

```html
<template>
  <VueGreetings />
</template>
```

### Local Registration

```html
<template>
  <VueGreetings />
</template>

<script setup lang="ts">
import { VueGreetings } from 'vue-greetings'
</script>
```

### Using the Greeting Function Directly

```ts
import { getGreeting } from 'vue-greetings'

const message = getGreeting()
```

## Support me

Hi, I'm Opeoluwa!

I'm a full stack developer devoted to building community projects...

If you find the plugin helpful, consider [buying me pizza](https://getfidia.com/pay/opeolluwa/open-source)
