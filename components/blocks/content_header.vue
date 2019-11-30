<template>
<div class="content-header"
  :style="{'textAlign': text_align}"
>
  <h1 class="heading font--f1">{{heading}}</h1>
  <span class="text font--f5">{{text}}</span>
</div>

</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: '스티커'
    },
    text: {
      type: String,
      default: '간략 소개'
    },
    text_align: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content-header {
  display: flex;
  flex-direction: column;
  .heading {
    margin-bottom: 18px;
  }
  .text {

  }
}
</style>