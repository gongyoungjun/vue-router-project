<script setup>
import { ref } from 'vue';

const message = ref('Hello from Main');

export { message };
</script>

<template>
  <div>
    <h1>My Main</h1>
    <p>{{ message }}</p>
  </div>
</template>