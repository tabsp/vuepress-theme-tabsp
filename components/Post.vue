<template>
  <div type="flex" class="post-main">
    <article class="post">
      <div class="post_header">
        <div class="post_meta">
          <div class="post_date">{{$page.frontmatter.date || $page.lastUpdated}}</div>
          <div class="post_tags">
            <li v-for="(tag,index) in $page.frontmatter.tags" :key="index">
              <el-link :href="$page.path" :underline="true">{{tag}}</el-link>
            </li>
          </div>
        </div>
        <div class="post_title">{{$page.title}}</div>
      </div>
      <div class="post_content">
        <Content />
      </div>
      <div class="post_bugs">
        文章勘误可以直接到
        <a
          target="_blank"
          :href="'https://github.com/tabsp/tabsp.github.io/blob/src/posts/'+$page.frontmatter.title+'.md'"
        >源代码地址</a>
        修改或者
        <a
          target="_blank"
          href="https://github.com/tabsp/tabsp.github.io/issues/new"
        >提交 ISSUE</a>，感谢阅读！
      </div>
    </article>
  </div>
</template>

<style lang="stylus">
.post-main {
  max-width: 768px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 24px !important;
  padding-bottom: 24px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;

  .post {
    width: 100%;

    .post_header {
      .post_meta {
        display: flex !important;
        flex-wrap: wrap !important;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 16px;

        .post_date {
          color: #6a737d;
        }

        .post_date::after {
          content: '——';
          margin-left: 1em;
          margin-right: 1em;
          color: #6a737d;
        }

        .post_tags {
          display: flex !important;
          flex-wrap: wrap !important;
          flex-direction: row !important;

          li {
            list-style: none;
          }

          li:not(:last-child)::after {
            content: ',';
            margin-right: 1em;
            color: #6a737d;
          }
        }
      }
    }

    .post_title {
      font-weight: 500 !important;
      line-height: 1.25 !important;
    }
  }
}

.post_bugs {
  padding: 10px;
  color: #657b83;
  margin-top: 30px;
  border: 1px dashed rgba(37, 26, 26, 0.11);
}

@media (min-width: 768px) {
  .post-main {
    max-width: 768px;

    .post_header {
      .post_meta {
        flex-direction: row !important;
      }

      .post_title {
        font-size: 38px !important;
        margin-bottom: 40px;
      }
    }
  }
}

@media (max-width: 767px) {
  .post-main {
    max-width: 100%;

    .post_header {
      .post_meta {
        flex-direction: column !important;

        .post_date::after {
          content: '' !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .post_tags {
          margin-top: 10px;
        }
      }

      .post_title {
        font-size: 30px !important;
        margin-bottom: 20px;
      }
    }
  }
}
</style>


