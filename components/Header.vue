<template>
  <el-header height="70px">
    <el-row type="flex">
      <el-col :xs="20" :sm="12">
        <div class="site-title">
          <a href="/">
            <Avatar />
            <h1>{{ $site.title }}</h1>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- <Nav /> -->
  </el-header>
</template>

<style lang="stylus">
.el-header {
  padding-left: 16px;
  padding-top: 16px !important;
  padding-bottom: 16px !important;

  .site-title {
    a {
      color: #24292e !important;
      text-decoration: none !important;

      h1 {
        font-size: 16px !important;
        display: inline-block;
        font-weight: 400 !important;
      }
    }
  }
}

@media (min-width: 768px) {
  .el-header {
    height: 110px !important;
    line-height: 55px !important;

    h1 {
      padding-left: 10px;
    }
  }
}

@media (max-width: 767px) {
  .el-header {
    height: 70px !important;
    line-height: 35px !important;
  }
}
</style>