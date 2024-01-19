<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showHeader = ref(true);

onMounted(() => {
  // 페이지가 로드되면 헤더를 표시
  showHeader.value = true;
});

onBeforeUnmount(() => {
  // 페이지 이탈 전에 헤더를 숨김
  showHeader.value = false;
});
</script>


<template>
  <div v-if="showHeader" class="header-container">
    <!-- 헤더 내용 -->
    <h3>
      <div class="button-group">
        <router-link to="/notice">공지사항</router-link>
        <router-link to="/board">게시판</router-link>
        <router-link to="/mypage">마이페이지</router-link>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </div>
    </h3>
  </div>
</template>


<style scoped>
.header-container {
  background-color: #333;
  color: white;
  padding: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.button-group button {
  font-size: 1.3rem; /* 글자 크기 조절 */
  text-align: center; /* 가운데 정렬 */
  letter-spacing: 3px; /* 글자 간격 조절 */
  margin-right: 30px; /* 버튼 간격 조절 */
}

.button-group button:last-child {
  margin-right: 0; /* 마지막 버튼 */
}
</style>