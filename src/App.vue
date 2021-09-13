:<template>
  <div class="app">
    <router-view/>
    <main-footer v-show="!is404" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import MainFooter from '@/components/Main/MainFooter/MainFooter.vue';

export default defineComponent({
  setup() {
    const route = useRoute();
    const is404 = computed(() => {
      return route.name === 'NotFound';
    });

    return {
      is404,
    };
  },
  components: {
    MainFooter,
  },
});
</script>

<style lang="scss">
</style>
