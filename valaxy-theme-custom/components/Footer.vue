<script setup lang="ts">
import { useSiteConfig } from "valaxy";
import { useThemeConfig } from "../composables";
import { onMounted, ref } from "vue";

const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();
const hitokoto = ref("");

onMounted(async () => {
  if (themeConfig.value.footer.hitokoto?.enable) {
    const res = await fetch("https://v1.hitokoto.cn");
    const data = await res.json();
    hitokoto.value = data.hitokoto;
  }
});
</script>

<template>
  <footer class="footer m-auto">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="text-center lg:text-left">
          <p style="display: flex" v-if="themeConfig.footer.left_top">
            <template v-for="link in themeConfig.footer.left_top">
              <AppLink
                class="footer-left-top-item"
                v-if="link.url"
                :to="link.url"
                :aria-label="link.name"
              >
                <img
                  :width="link.width"
                  :height="link.height"
                  m="l-1 b-10px"
                  :src="link.img"
                  loading="lazy"
                  :alt="link.name"
                />
              </AppLink>
            </template>
          </p>
          <p>
            Copyright © {{ themeConfig.footer.since }} -
            {{ new Date().getFullYear() }}
            <a href="/">{{ siteConfig.title }}</a>
          </p>
          <p v-if="themeConfig.footer.left_bottom">
            <template v-for="link in themeConfig.footer.left_bottom">
              <AppLink
                class="footer-left-top-item"
                v-if="link.url"
                :to="link.url"
                :aria-label="link.name"
              >
                {{ link.name }}
              </AppLink>
              &nbsp;
            </template>
          </p>
          <!-- <p v-if="themeConfig.indiewebring">
            <a href="https://xn--sr8hvo.ws/previous">←</a>
              An <a href="https://xn--sr8hvo.ws">IndieWeb Webring</a> 🕸💍
            <a href="https://xn--sr8hvo.ws/next">→</a>
          </p> -->
          <p v-if="themeConfig.footer.hitokoto?.enable">{{ hitokoto || "用代码表达言语的魅力，用代码书写山河的壮丽。" }}</p>
        </div>
        <div class="text-center lg:text-right">
          <p>
            Built with <a href="https://valaxy.site">Valaxy</a> by 克喵爱吃卤面
          </p>
          <p>Customized by SZNinty</p>
        </div>
      </div>
    </div>
  </footer>
</template>
