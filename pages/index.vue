<template>
  <div class="landing-page">
    <default-page-template>
      <landing-header></landing-header>
      <landing-content
        :products="products"
        :productsInit="getProducts"
        :categoryTitle="'BEST'"
      ></landing-content>
    </default-page-template>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';

// TEMPLATE
import DefaultPageTemplate from '@/components/templates/default_page_template.vue'

// SECTION
import LandingHeader from '@/components/sections/content/landing_header_section.vue'
import LandingContent from '@/components/sections/content/landing_content_section.vue'

export default {
  computed: {
    ...mapState('product', {
      products: state => state.all_products
    })
  },
  components: {
    DefaultPageTemplate,
    LandingHeader,
    LandingContent
  },
  methods: {
    ...mapActions('product', ['getProducts'])
  }
}
</script>

<style lang="scss">
.landing-page {
  
}
</style>
