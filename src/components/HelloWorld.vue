<script setup lang="ts">
import { ref } from 'vue'

type Fruits = {
  name: string;
  color: string;
}

const getFruits = (fruits: Fruits): Fruits => {
  return fruits;
}

getFruits({ name: 'いちご', color: '赤' })

// defineProps で 親コンポーネントから props を受け取ることができる
defineProps<{ msg: string }>()

// state変数はこうやって定義
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- on click イベントは @click で拾える | templateに変数を展開するには{{ count }}を使う -->
    <button class="red" type="button" @click="count++">count is {{ count }}</button>

  </div>

</template>

<style scoped>
.red {
  color: red;
}
</style>
