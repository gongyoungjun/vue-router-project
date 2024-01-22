<script setup>
import { ref } from 'vue';
import Pagination from '@/components/common/Pagination.vue';

const vacations = ref([
  { id: 1, title: '휴가 신청 1', content: '휴가 신청 내용 1' },
  { id: 2, title: '휴가 신청 2', content: '휴가 신청 내용 2' },
  { id: 3, title: '휴가 신청 3', content: '휴가 신청 내용 3' },
  // Add more vacation items as needed
]);
</script>

<template>
  <div>
    <h2>휴가 목록</h2>
    <ul class="vacation-list">
      <li v-for="vacation in vacations" :key="vacation.id" class="vacation-item">
      </li>
    </ul>
  </div>
</template>



<style scoped>
.vacation-list {
  list-style: none;
  padding: 0;
}

.vacation-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

.vacation-item:hover {
  background-color: #f0f0f0;
}
</style>
