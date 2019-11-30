<template>
  <landing-template>
    <landing-header slot="top-section"></landing-header>
    <landing-content slot="bottom-section"></landing-content>
  </landing-template>
</template>

<script>

export default {
  components: {
    // TEMPLATE
    LandingTemplate: () => import('@/components/templates/landing_template.vue'),

    // SECTION
    LandingHeader: () => import('@/components/sections/content/landing_header_section.vue'),
    LandingContent: () => import('@/components/sections/content/landing_content_section.vue'),
  }
}
</script>

<style lang="scss">

</style>
