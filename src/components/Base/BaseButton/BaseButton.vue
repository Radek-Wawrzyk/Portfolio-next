<template>
  <component
    :is="componentType"
    :title="title"
    :aria-label="title"
    :type="nativeType"
    :disabled="disabled"
    :to="to && componentType === 'router-link' ? to : null"
    :href="to && componentType === 'a' ? to : null"
    :class="buttonCssClasses"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  emits: ['click', 'focus'],
  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    title: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    to: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    nativeType: {
      type: String as PropType<string>,
      required: false,
      default: () => ('button'),
    },
    nativeLink: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    type: {
      type: String as PropType<string>,
      required: false,
      default: () => ('primary'),
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
  },
  setup(props) {
    const componentType = computed(() => {
      if (props.to && props.nativeLink) return 'a';
      if (props.to && !props.nativeType) return 'router-link';
      return 'button';
    });

    const buttonCssClasses = computed(() => {
      return [
        props.disabled ? 'base-button--disabled' : false,
        props.type === 'primary' ? 'base-button--primary' : false,
        props.type === 'default' ? 'base-button--default' : false,
        props.type === 'default-reversed' ? 'base-button--default-reversed' : false,
        props.isActive ? 'base-button--is-active' : false,
      ];
    });

    return {
      componentType,
      buttonCssClasses,
    };
  },
});

</script>

<style lang="scss" src="./BaseButton.scss" />
