<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 子コンポーネントにpropsを渡すにはこうする -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div>hoge</div>
  <router-view></router-view>

</template>

<!-- scopedでcssをローカルスコープに閉じ込める？ -->
<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
