<template>
  <div class="posts-container">
    <el-row type="flex" v-for="(post,index) in $posts" :key="index" align="top" class="post-item">
      <el-col class="post-item_date">
        <el-link :href="post.path" :underline="true">{{post.frontmatter.date || post.lastUpdated}}</el-link>
      </el-col>
      <el-col class="post-item_content">
        <ul class="post-item_tags">
          <li v-for="(tag,index) in post.frontmatter.tags" :key="index">
            <el-link :href="post.path" :underline="true">{{tag}}</el-link>
          </li>
        </ul>
        <div class="post-item_title">
          <el-link :href="post.path" :underline="true">{{post.title}}</el-link>
        </div>
        <div class="post-item_excerpt" v-html="post.excerpt"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus">
.posts-container {
  font-size: 16px;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  .post-item {
    margin-bottom: 64px !important;
  }

  .post-item_date {
    color: #6a737d;
    padding-right: 10px;

    a {
      color: inherit;
    }
  }

  .post-item_title {
    a {
      color: #24292e !important;
      font-size: 20px !important;
    }
  }

  .post-item_excerpt {
    color: #586069 !important;
  }

  .post-item_tags {
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row !important;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 16px;

    li {
      list-style: none;
    }

    li:not(:last-child)::after {
      content: ',';
      margin-right: 1em;
      color: #6a737d;
    }
  }

  .post-item_tags li {
    list-style: none;
  }
}

@media (min-width: 768px) {
  .posts-container {
    padding: 0 108px;

    .post-item_date {
      width: 25% !important;
    }

    .post-item_content {
      width: 75% !important;
    }
  }
}

@media (max-width: 767px) {
  .posts-container {
    width: 100% !important;

    .post-item {
      flex-direction: column !important;

      .post-item_date {
        width: 100% !important;
      }
    }
  }
}
</style>