<template>
<div class="landing-content">
  <content-header
    :heading="'BEST PRODUCT'"
    :text="'최고의 상품들'"
    :text_align="'center'"
  ></content-header>
  <div class="item-list">
    <card-with-image
      v-for="i in 12"
      :key="i"
    ></card-with-image>
  </div>
</div>
</template>

<script>

export default {
  components: {
    ContentHeader: () => import('@/components/blocks/content_header.vue'),
    CardWithImage: () => import('@/components/blocks/card_with_image.vue')
  }
}
</script>

<style lang="scss">
.landing-content {

  .content-header {
    display: flex;
    justify-content: center;
    margin-top: 96px;
    margin-bottom: 64px;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 135px 0px 135px;
    
    .card-with-image {
      margin: 10px;
    }

  }
}
</style>