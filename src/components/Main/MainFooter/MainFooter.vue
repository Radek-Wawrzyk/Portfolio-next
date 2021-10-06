<template>
  <footer class="main-footer">
    <header class="main-footer__header">
      <div class="main-footer__header-content container">
        <h3 class="main-footer__header-name">
          Contact me
        </h3>

        <base-logo class="main-footer__header-logo" />
      </div>
    </header>

    <div class="main-footer-content">
      <div class="container main-footer-content__wrapper">
        <div class="main-footer-content__info">
          <ul
            class="main-footer-content__block"
            v-for="(block, index) in footerInfo"
            :key="index"
          >
            <ul class="main-footer-content__block-list">
              <li
                class="main-footer-content__block-item"
                v-for="infoItem in block.items"
                :key="infoItem.name"
              >
                <a
                  v-if="infoItem.link"
                  :href="infoItem.link"
                  :aria-label="infoItem.name"
                  :title="infoItem.name"
                  class="main-footer-content__block-link"
                >
                  {{ infoItem.name }}
                </a>

                <p class="main-footer-content__block-text" v-else>
                  {{ infoItem.name }}
                </p>
              </li>
            </ul>
          </ul>
        </div>

        <ul class="main-footer-content__navigation">
          <li
            class="main-footer-content__navigation-item"
            v-for="menuItem in footerMenu"
            :key="menuItem.name"
          >
            <router-link
              :to="menuItem.link"
              :aria-label="menuItem.name"
              :title="menuItem.name"
              class="main-footer-content__navigation-link"
            >
              {{ menuItem.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-footer-info">
      <div class="main-footer-info__wrapper container">
        <p class="main-footer-info__copyright-text">
          © 2021 Radek Wawrzyk - designed with love by jakubkowalski.dev
        </p>

        <ul class="main-footer-info__socials">
          <li
            class="main-footer-info__socials-item"
            v-for="menuItem in footerSocials"
            :key="menuItem.name"
          >
            <a
              :href="menuItem.link"
              :aria-label="menuItem.name"
              :title="menuItem.name"
              class="main-footer-info__socials-link"
              v-html="menuItem.icon"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import BaseLogo from '@/components/Base/BaseLogo/BaseLogo.vue';
import { defineComponent, reactive } from 'vue';
import { footerDetails, footerNavigation, footerSocialsDetails } from '@/data/footer';

export default defineComponent({
  name: 'MainFooter',
  components: { BaseLogo },
  setup() {
    const footerMenu = reactive(footerNavigation);
    const footerInfo = reactive(footerDetails);
    const footerSocials = reactive(footerSocialsDetails);

    return {
      footerMenu,
      footerInfo,
      footerSocials,
    };
  },
});

</script>

<style lang="scss" src="./MainFooter.scss" />
