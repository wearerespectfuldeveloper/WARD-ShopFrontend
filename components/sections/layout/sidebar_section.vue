<template>
<div class="sidebar-section"
>
  <div class="brand">
    <h1 class="brand-title" @click="$router.push('/')">WARD</h1>
  </div>
  <page-sidebar
    :height="'100vh'"
    :items="categories"
    :clickEvent="clickEvent"
  ></page-sidebar>
</div>
</template>

<script>
import PageSidebar from '@/components/blocks/page_sidebar.vue';

export default {
  components: {
    PageSidebar
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    clickEvent: {
      type: Function,
      default: () => {}
    }
  },
}
</script>

<style lang="scss">
.sidebar-section {
  position: fixed;
  width: 300px;

  .brand {
    .brand-title {
      cursor: pointer;
      color: $Dark;
      font-size: 25px;
      padding: 14px 14px 12px 18px;
    }
    @include border-bottom;
  }

  // fixed의 경우엔 어쩔 수 없이 반응형에 대한 컨트롤을 섹션에 추가해야 함.
  @media screen and (max-width: 1100px) {
    width: 200px;
  }
}
</style>