<template>
  <div class="vue__greetings">{{ greeting }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getGreeting } from './greeting'

defineProps<{
  username?: string
}>()

const greeting = ref(getGreeting())

onMounted(() => {
  greeting.value = getGreeting()
})
</script>

<style scoped>
</style>
