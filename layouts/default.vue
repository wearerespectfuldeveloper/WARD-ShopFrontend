<template>
<div class="layout">
  <layout-template>
    <header-section
      slot="header"
    ></header-section>
    <drawer-section
      slot="drawer"
    ></drawer-section>
    <nuxt
      slot="page-content"
    />
  </layout-template>
  
</div>
</template>

<script>
// 템플릿
import LayoutTemplate from '@/components/templates/layout_template.vue'; 

// 섹션
import HeaderSection from '@/components/sections/layout/header_section.vue';
import DrawerSection from '@/components/sections/layout/drawer_section.vue';


export default {
  components: {
    LayoutTemplate,
    HeaderSection,
    DrawerSection,
  }
}
</script>

<style lang="scss" scoped>
.layout {
  
}
</style>