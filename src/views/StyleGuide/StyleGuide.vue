<template>
  <div class="style-guide">
    <div class="container">
      <section class="style-guide__section">
        <base-heading level="4" class="style-guide__section-heading">
          Primary button
        </base-heading>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton>
            Primary Button
          </BaseButton>

          <BaseButton>
            Primary Button Reversed
          </BaseButton>

          <BaseButton disabled>
            Primary Button Disabled
          </BaseButton>
        </div>
      </section>

      <section class="style-guide__section">
        <base-heading level="4" class="style-guide__section-heading">
          Default button
        </base-heading>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton type="default">
            Default Button
          </BaseButton>

          <BaseButton type="default" disabled>
            Default Button Disabled
          </BaseButton>
        </div>
      </section>

      <section class="style-guide__section style-guide__section--accent">
        <base-heading level="4" class="style-guide__section-heading">
          Reversed Default Button
        </base-heading>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton type="default-reversed">
            Reversed Default Button
          </BaseButton>

          <BaseButton type="default-reversed" disabled>
            Reversed Default Disabled
          </BaseButton>
        </div>
      </section>

      <section class="style-guide__section style-guide__section--accent">
        <base-heading level="4" class="style-guide__section-heading">
          Reversed Default Button
        </base-heading>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton type="default-reversed">
            Reversed Default Button
          </BaseButton>

          <BaseButton type="default-reversed" disabled>
            Reversed Default Disabled
          </BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseHeading from '@/components/Base/BaseHeading/BaseHeading.vue';

export default {
  name: 'StyleGuide',
  components: { BaseHeading, BaseButton },
};
</script>

<style lang="scss" src="./StyleGuide.scss" />
