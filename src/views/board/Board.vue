<script setup>
import { ref, watchEffect } from 'vue';
import Pagination from '@/components/common/Pagination.vue';

const posts = ref([
  { id: 1, title: '게시물 제목 1', content: '게시물 내용 1' },
  { id: 2, title: '게시물 제목 2', content: '게시물 내용 2' },
  { id: 3, title: '게시물 제목 3', content: '게시물 내용 3' },
  { id: 4, title: '게시물 제목 4', content: '게시물 내용 4' },
  { id: 5, title: '게시물 제목 5', content: '게시물 내용 5' },
  { id: 6, title: '게시물 제목 6', content: '게시물 내용 6' },
  { id: 7, title: '게시물 제목 7', content: '게시물 내용 7' },
  { id: 8, title: '게시물 제목 8', content: '게시물 내용 8' },
  { id: 9, title: '게시물 제목 9', content: '게시물 내용 9' },
  { id: 10, title: '게시물 제목 10', content: '게시물 내용 10' },
  { id: 11, title: '게시물 제목 11', content: '게시물 내용 11' },
  // Add more posts as needed
]);

const pageInfo = ref({
  number: 1,
  recordSize: 5,
  totalCount: posts.value.length,
});

const changePage = (pageNum) => {
  pageInfo.value.number = pageNum;
};

const slicedPosts = ref([]);

watchEffect(() => {
  const startIdx = (pageInfo.value.number - 1) * pageInfo.value.recordSize;
  const endIdx = startIdx + pageInfo.value.recordSize;
  slicedPosts.value = posts.value.slice(startIdx, endIdx);
});

const downloadExcel = () => {
  const rows = [['ID', 'Title', 'Content']];
  posts.value.forEach(post => {
    rows.push([post.id, post.title, post.content]);
  });

  if (rows.length > 1) {
    const csvContent = rows.map(row => row.join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'test.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.error('No data available for download');
  }
};
</script>

<template>
  <div>
    <h2>게시판</h2>
    <ul class="post-list">
      <li v-for="post in slicedPosts" :key="post.id" class="post-item">
        <div class="post-header">
          <h3>{{ post.title }}</h3>
        </div>
        <div class="post-content">
          <p>{{ post.content }}</p>
        </div>
      </li>
    </ul>
    <Pagination :pageInfo="pageInfo" @changePage="changePage" />
    <button @click="downloadExcel">Download Excel</button>
  </div>
</template>

<style scoped>
.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

.post-header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.post-content {
  color: #555;
}
</style>





<!--
<script setup>
import {ref, watchEffect} from 'vue';
import Pagination from "@/components/common/Pagination.vue";

const posts = ref([
  {id: 1, title: '게시물 제목 1', content: '게시물 내용 1'},
  {id: 2, title: '게시물 제목 2', content: '게시물 내용 2'},
  {id: 3, title: '게시물 제목 3', content: '게시물 내용 3'},
  {id: 3, title: "게시물 제목 3", content: "게시물 내용 3"},
  {id: 4, title: "게시물 제목 4", content: "게시물 내용 4"},
  {id: 1, title: '게시물 제목 1', content: '게시물 내용 1'},
  {id: 2, title: '게시물 제목 2', content: '게시물 내용 2'},
  {id: 3, title: '게시물 제목 3', content: '게시물 내용 3'},
  {id: 3, title: "게시물 제목 3", content: "게시물 내용 3"},
  {id: 4, title: "게시물 제목 4", content: "게시물 내용 4"},
]);

const pageInfo = ref({
  number: 1,
  recordSize: 2, // 페이지당 게시물 수
  totalCount: posts.value.length,
});

const changePage = (pageNum) => {
  pageInfo.value.number = pageNum;
};

const slicedPosts = ref([]);

watchEffect(() => {
  const startIdx = (pageInfo.value.number - 1) * pageInfo.value.recordSize;
  const endIdx = startIdx + pageInfo.value.recordSize;
  slicedPosts.value = posts.value.slice(startIdx, endIdx);
});

const downloadExcel = () => {
  // 엑셀 파일 생성
  const rows = [['ID', 'Title', 'Content']];
  posts.value.forEach(post => {
    rows.push([post.id, post.title, post.content]);
  });

  // 엑셀 파일 다운로드
  if (rows.length > 1) {
    const csvContent = rows.map(row => row.join(',')).join('\r\n');
    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'test.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.error('데이터가 없다');
  }
};
</script>

<template>
  <div>
    <h2>게시판</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-header">
          <h3>{{ post.title }}</h3>
        </div>
        <div class="post-content">
          <p>{{ post.content }}</p>
        </div>
      </li>
    </ul>
    <Pagination :pageInfo="pageInfo" @changePage="changePage" />
    <button @click="downloadExcel">Download Excel</button>
  </div>
</template>

<style scoped>
.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

.post-header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.post-content {
  color: #555;
}
</style>
-->
