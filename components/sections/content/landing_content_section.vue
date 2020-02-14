<template>
  <div class="landing-content">
    <content-header
      :heading="`${categoryTitle}`"
      :text="'최고의 상품들'"
      :text_align="'center'"
    ></content-header>

    <transition-group
      name="fade"
      tag="div"
      class="item-list"
      appear
      mode="out-in"
    >
      <card-with-image
        v-for="product in products"
        :width="'400px'"
        :thumnail_height="'300px'"
        :key="product.idx"
        :title="product.name"
        :text="product.description"
        :thumnail_image="
          product.imageResource
            ? product.imageResource
            : 'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        "
      ></card-with-image>
    </transition-group>
    <div class="infinite-scroll">
      <infinite-scroll-trigger></infinite-scroll-trigger>
    </div>
  </div>
</template>

<script>
// 트리거 블록
import InfiniteScrollTrigger from "@/components/trigger/infinite_scroll_trigger.vue";

import ContentHeader from "@/components/blocks/content_header.vue";
import CardWithImage from "@/components/blocks/card_with_image.vue";

export default {
  components: {
    ContentHeader,
    CardWithImage,
    InfiniteScrollTrigger
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    categoryTitle: {
      type: String,
      default: "PRODUCT"
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.landing-content {
  .content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card-with-image {
      margin: 10px 20px 70px 20px;
    }
  }

  .infinite-scroll {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>
