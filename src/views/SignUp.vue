<script setup>
import {ref} from "vue";

const employee = ref({
  empNo: null,
  empNm: '',
  empPwd: '',
  empPhn: '',
  empEml: '',
  empStCd: '',
  empRnkCd: '',
  empHrDt: '',
  empSlr: null,
  empBrtDt: '',
});

/*const handleSubmit = async () => {
  try {
    const response = await authStore.join(employee.value);
    alert('회원가입이 완료되었습니다.')
    // 회원가입이 성공했을 때, 처리할 내용을 추가하세요.
  } catch (error) {
    alert('회원가입에 실패했습니다.');
    console.error(error);
  }
};*/
</script>

<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="handleSubmit">
      <label>사번:</label>
      <input v-model="employee.empNo" type="number" required><br>
      <label>사원이름:</label>
      <input v-model="employee.empNm" type="text" required><br>
      <label>비밀번호:</label>
      <input v-model="employee.empPwd" type="password" required><br>
      <label>전화번호:</label>
      <input v-model="employee.empPhn" type="text"><br>
      <label>이메일:</label>
      <input v-model="employee.empEml" type="email"><br>
      <label>사원상태 코드:</label>
      <input v-model="employee.empStCd" type="text"><br>
      <label>직급 코드:</label>
      <input v-model="employee.empRnkCd" type="text"><br>
      <label>입사일:</label>
      <input v-model="employee.empHrDt" type="date"><br>
      <label>연봉:</label>
      <input v-model="employee.empSlr" type="number"><br>
      <label>생년월일:</label>
      <input v-model="employee.empBrtDt" type="date"><br>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 전체 화면 높이에 따라 조절 */
}

h1 {
  text-align: center;
}

form {
  width: 300px; /* 폼의 너비 설정 */
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db; /* 버튼 배경색 */
  color: #fff; /* 버튼 글자색 */
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9; /* 마우스 오버시 배경색 변경 */
}
</style>
