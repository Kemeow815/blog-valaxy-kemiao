<script lang="ts" setup>
import { watch, nextTick, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { init } from '@waline/client';
import '@waline/client/style';
import { useFrontmatter } from "valaxy";
import { useAppStore } from "valaxy";

const appStore = useAppStore();
const fm = useFrontmatter();
const el = ref<HTMLElement | null>(null);
const route = useRoute();

let walineInstance: any;

onMounted(() => {
  nextTick(() => {
    initWaline(getConfByPage());
  });
  watch(
    () => ({ isDark: appStore.isDark }),
    (newVal) => {
      if (walineInstance) {
        walineInstance.update({ dark: newVal.isDark ? 'auto' : 'light' });
      }
    }
  );
});

watch(
  () => route.path,
  () => {
    nextTick(() => {
      walineInstance?.update(getConfByPage());
    });
  }
);

onBeforeUnmount(() => {
  walineInstance?.destroy();
});

function initWaline(conf: any) {
  walineInstance = init({
    el: el.value,
    ...conf,
  });
}

function getConfByPage() {
  return {
    path: route.path,
    pageTitle: fm.value.title,
    serverURL: "https://waline-valaxy-blog.314926.xyz", // 替换为你的Waline服务端地址
    locale: 'zh-CN',
    dark: appStore.isDark ? 'auto' : 'light',
    // 其他Waline配置项
  };
}
</script>

<template>
  <div class="card">
    <div class="card-content">
      <ClientOnly>
        <h3 class="title is-4 has-text-centered mb-5">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-comments"></i>
            </span>
            <span>评论</span>
          </span>
        </h3>
        <div ref="el"></div>
      </ClientOnly>
    </div>
  </div>
</template>