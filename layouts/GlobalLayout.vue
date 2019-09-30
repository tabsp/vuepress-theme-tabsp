<template>
  <el-container direction="vertical">
    <Header />
    <component :is="layout" />
    <Footer />
  </el-container>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    }
  }
};
</script>