<template>
  <div>details-{{id}}</div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return { title: "学校首页4" };
  },
  async asyncData({ app, query, params, redirect }) {
    let { id } = params;
    return { id };
  },
};
</script>
