<template>
<div class="toggle-button-apps" @click="clickEvent">
  <img src="@/assets/svg/icons/apps.svg" />
</div>
</template>

<script>
export default {
  props: {
    clickEvent: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-button-apps {
  cursor: pointer;
}
</style>