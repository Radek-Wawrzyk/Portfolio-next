<template>
  <component
    :is="headingLevel"
    :class="headingCssClasses"
    class="base-heading"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'BaseHeading',
  props: {
    level: {
      type: [String, Number] as PropType<string|number>,
      required: false,
      default: () => (3),
    },
    align: {
      type: String as PropType<string>,
      required: false,
      default: () => ('left'),
    },
    bold: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => true,
    },
  },
  setup(props) {
    const headingLevel = computed(() => {
      switch (props.level) {
        case '1': {
          return 'h1';
        }
        case '2': {
          return 'h2';
        }
        case '3': {
          return 'h3';
        }
        case '4': {
          return 'h4';
        }
        case '5': {
          return 'h5';
        }
        case '6': {
          return 'h6';
        }
        default: {
          return 'h1';
        }
      }
    });

    const headingCssClasses = computed(() => {
      return [
        props.align === 'left' ? 'base-heading--left' : false,
        props.align === 'center' ? 'base-heading--center' : false,
        props.align === 'right' ? 'base-heading--right' : false,
        props.bold ? 'base-heading--bold' : false,
        `base-heading--${headingLevel.value}`,
      ];
    });

    return {
      headingLevel,
      headingCssClasses,
    };
  },
});
</script>

<style lang="scss" src="./BaseHeading.scss" />
