<template>
<div class="layout">
  <layout-template>
    <header-section
      slot="header"
    ></header-section>
    <sidebar-section
      slot="sidebar"
      :categories="categories"
      :clickEvent="selectCategory"
    ></sidebar-section>
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
import SidebarSection from '@/components/sections/layout/sidebar_section.vue';

import { mapState, mapGetters,mapMutations, mapActions } from 'vuex';

export default {
  mounted() {
    this.getCategories({});
  },
  computed: {
    ...mapState('category', {
      categories: state => state.all_category_list
    })
  },
  components: {
    LayoutTemplate,
    HeaderSection,
    SidebarSection,
  },
  methods: {
    ...mapActions('category', ['getCategories']),
    ...mapMutations('category', ['selectCategory']),
  }
}
</script>

<style lang="scss" scoped>
.layout {
  
}
</style>
