<template>
  <div class="landing-content">
    <content-header
      :heading="`${selected_category ? selected_category.name : 'PRODUCT'}`"
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
        :idx="product.idx"
        :width="'400px'"
        :thumnail_height="'300px'"
        :key="product.idx"
        :title="product.name"
        :text="product.description"
        :price="product.price"
        :thumnail_image="
          product.imageResource
            ? product.imageResource
            : 'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        "
        :button_event="buttonEvent"
      ></card-with-image>
    </transition-group>
    <div class="infinite-scroll">
      <infinite-scroll-trigger
        :triggerEvent="getProducts"
      ></infinite-scroll-trigger>
    </div>
  </div>
</template>

<script>
// 트리거 블록
import InfiniteScrollTrigger from "@/components/trigger/infinite_scroll_trigger.vue";

import ContentHeader from "@/components/blocks/content_header.vue";
import CardWithImage from "@/components/blocks/card_with_image.vue";

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    ContentHeader,
    CardWithImage,
    InfiniteScrollTrigger
  },
  mounted() {
    this.getProducts({ categoryIdx: '5' });
  },
  computed: {
    ...mapState('product', {
      products: state => state.all_products,
    }),
    ...mapState('category', {
      selected_category: state => state.selected_category
    }),
  },
  methods: {
    ...mapActions('product', ['getProducts']),
    ...mapMutations('product', [
      'selectProduct'
    ]),
    buttonEvent (idx) {
      this.selectProduct(idx);
      this.$router.push(`/productDetail/${idx}`)
    }
  }
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
