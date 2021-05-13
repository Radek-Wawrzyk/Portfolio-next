<template>
  <div class="app">
    <router-view/>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainFooter from '@/components/Main/MainFooter/MainFooter.vue';

export default defineComponent({
  setup() {
    
  },
  components: {
    MainFooter,
  },
})
</script>

<style lang="scss">
</style>
