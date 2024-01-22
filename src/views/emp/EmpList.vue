<script setup>
import {ref, onMounted} from 'vue';
import apiService from '@/services/api.js';
const userData = ref(null);

onMounted(async () => {
  try {
    const response = await apiService.EmpList('emp/list');
    if (response.status === 'OK' && response.code === '0000') {
      userData.value = response.data;
    } else {
      console.error('에러', response);
    }
  } catch (error) {
    console.error('에러2', error);
  }
});
</script>

<template>
  <div>
    <h2>사용자 정보</h2>
    <div v-if="userData">
      <div v-for="user in userData.employeeList" :key="user.empNo">
        <div><strong>사번:</strong> {{ user.empNo }}</div>
        <div><strong>이름:</strong> {{ user.empNm }}</div>
        <div><strong>Email:</strong> {{ user.empEml }}</div>
        <div><strong>생년월일:</strong> {{ user.empBrtDt }}</div>
        <div><strong>직급:</strong> {{ user.rnkNm }}</div>
        <div><strong>상태:</strong> {{ user.stNm }}</div>
        <div><strong>휴가 총일수:</strong> {{ user.empVctnTtl }}</div>
      </div>
    </div>
    <div v-else>
      데이터를 로딩 중입니다...
    </div>
  </div>
</template>


<style scoped>
</style>


<!--
<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import EmployeeService from '@/services/api.js';

const router = useRouter();
const employees = ref([]);

onMounted(async () => {
  const queryParams = {
    offset: 0,
    cntPerPage: 10,  // 예시로 페이지당 10개씩 표시
    page: 1,  // 예시로 첫 번째 페이지 표시
    startDt: '2024-01-21',
    endDt: '2024-01-21',
    noKeyword: 'string',
    nmKeyword: 'string',
    rnkKeyword: 'string',
  };

  try {
    const response = await EmployeeService.getEmployees(queryParams);
    employees.value = response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
});

const goToDetail = (empNo) => {
  router.push({name: 'EmpListDetail', params: {empNo}});
};
</script>

<template>
  <div>
    <h2>사원 목록</h2>
    <ul class="employee-list">
      <li v-for="employee in employees" :key="employee.empNo" class="employee-item" @click="goToDetail(employee.empNo)">
        {{ employee.empNm }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.employee-list {
  list-style: none;
  padding: 0;
}

.employee-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

.employee-item:hover {
  background-color: #f0f0f0;
}
</style>
-->
