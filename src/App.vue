<script setup>

import TheView from '@/layouts/TheView.vue'
import TheHeader from '@/layouts/TheHeader.vue'


</script>

<template>
  <TheHeader></TheHeader>
  <!--  <div id="app">
      <router-view />
    </div>-->


  <router-view></router-view>
  <TheView></TheView>
</template>

