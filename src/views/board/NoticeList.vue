<!--
<script setup>
import { ref, onMounted } from 'vue';
import { useMyStore } from '@/stores/pinia.js'; // 수정된 부분

const myStore = useMyStore();
const notices = ref([]);

onMounted(async () => {
  await myStore.fetchNotices();
  notices.value = myStore.notices;
});
</script>


<template>
  <div>
    <h2>게시판 목록</h2>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        <router-link :to="{ name: 'notice-detail', params: { id: notice.id } }">
          {{ notice.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
-->
