<script setup>
import {ref, defineProps, defineEmits, computed} from 'vue';

const props = defineProps({
  pageInfo: {
    type: Object,
    default: () => ({
      number: 1,
      recordSize: 5,
      totalCount: 0,
    }),
  },
});

const emit = defineEmits(['changePage']);

let pagingNumber = ref(props.pageInfo.number);

const maxPage = computed(() => Math.ceil(props.pageInfo.totalCount / props.pageInfo.recordSize));
const startNumber = computed(() => Math.max(1, pagingNumber.value - (pagingNumber.value % 10) + 1));
const endNumber = computed(() => Math.min(maxPage.value, startNumber.value + 9));

const pageList = computed(() => {
  const pages = [];
  for (let i = startNumber.value; i <= endNumber.value; i++) {
    pages.push(i);
  }
  return pages;
});

const onClickPagingArrow = (targetPage) => {
  if (targetPage >= 1 && targetPage <= maxPage.value) {
    pagingNumber.value = targetPage;
    emit('changePage', targetPage);
  }
};

const pageChange = (pageNum) => {
  onClickPagingArrow(pageNum);
};

</script>

<template>
  <div class="pagination">
    <button @click="onClickPagingArrow(1)" :disabled="pagingNumber === 1">처음</button>
    <button @click="onClickPagingArrow(pagingNumber - 1)" :disabled="pagingNumber === 1">이전으로</button>

    <!-- 각 버튼을 나열 -->
    <button
        v-for="pageNum in pageList"
        :key="pageNum"
        @click="pageChange(pageNum)"
        class="page_btn"
        :class="{ on: pagingNumber === pageNum }"
    >
      {{ pageNum }}
    </button>

    <button @click="onClickPagingArrow(pagingNumber + 1)" :disabled="pagingNumber === maxPage">다음으로</button>
    <button @click="onClickPagingArrow(maxPage)" :disabled="pagingNumber === maxPage">끝</button>
  </div>
</template>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 20px; /* 가운데 정렬을 위한 상단 여백 추가 */
}

.page_btn_list {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0; /* 추가 */
  text-align: center; /* 가운데 정렬 추가 */
}

.page_btn {
  margin-right: 5px;
  padding: 5px 10px; /* 버튼 패딩 추가 */
  background-color: #ddd; /* 버튼 배경색 추가 */
  border: 1px solid #aaa; /* 버튼 테두리 추가 */
  cursor: pointer; /* 마우스 커서 포인터로 변경 */
}

.page_btn.on {
  background-color: #3498db; /* 활성 페이지 버튼 배경색 추가 */
  color: #fff; /* 활성 페이지 버튼 글자색 추가 */
}
</style>


<!--
<style scoped>
.pagination {
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #fff;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
-->
