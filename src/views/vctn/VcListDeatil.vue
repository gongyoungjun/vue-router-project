<!--
<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const vacation = ref({});

const route = useRoute();

onMounted(() => {
  const vacationId = Number(route.params.id);
  vacation.value = findVacationById(vacationId);
});


const findVacationById = (id) => {
  return vacations.value.find((vacation) => vacation.id === id);
};
</script>

<template>
  <div>
    <h2>{{ vacation.title }}</h2>
    <p>{{ vacation.content }}</p>
    <router-link to="/vacations">목록으로 돌아가기</router-link>
  </div>
</template>-->

<script setup>

</script>

<template>

</template>

<style scoped>

</style>