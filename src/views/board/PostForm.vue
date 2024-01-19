<template>
  <div>
    <h3>글쓰기</h3>
    <form @submit.prevent="submitPost">
      <label for="title">제목:</label>
      <input v-model="post.title" type="text" id="title" required>

      <label for="content">내용:</label>
      <textarea v-model="post.content" id="content" required></textarea>

      <button type="submit">작성 완료</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    submitPost() {
      // 글쓰기 로직 작성
      console.log('글쓰기 완료:', this.post);
      // 글쓰기 완료 후 게시판 페이지로 이동
      this.$router.push('/board');
    },
  },
};
</script>