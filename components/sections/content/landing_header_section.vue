<template>
<div class="landing-header">
  <hero></hero>
</div>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/components/blocks/hero.vue'),

  }
}
</script>

<style lang="scss">
.landing-header {

}
</style>