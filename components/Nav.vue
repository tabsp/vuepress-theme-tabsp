<template>
  <div class="nav" v-if="$site.themeConfig.nav">
    <ul class="nav-ul">
      <li v-for="navItem in $site.themeConfig.nav" :key="navItem.text">
        <router-link class="page-link" :to="navItem.link">{{ navItem.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
.nav {
  width: 80%;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
}

.nav-ul {
  margin: 0;
  padding: 0;

  li {
    display: inline;
    margin-left: 10px;
  }
}
</style>