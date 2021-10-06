<template>
  <div class="home">
    <base-button>
      test
    </base-button>

    <base-button>
      test
    </base-button>

    <base-button>
      test
    </base-button>

    <base-heading>
      haha
    </base-heading>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseHeading from '@/components/Base/BaseHeading/BaseHeading.vue';

export default defineComponent({
  name: 'Home',
  components: { BaseHeading, BaseButton },
});
</script>
