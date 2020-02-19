<template>
  <div class="product-desc-content-section">
    <div class="product">
      <product-main-desc-card
        :product_image_link="product_info.imageResource"
        :product_name="product_info.name"
        :product_desc="product_info.description"
        :product_price="product_info.price"
      >
        <div class="extra" slot="extra-feature">
          <basic-selectbar :width="'100%'">
            옵션
          </basic-selectbar>
          <basic-selectbar :width="'100%'">
            수량
          </basic-selectbar>
          <div class="buttons">
            <basic-button :width="'150px'">
              장바구니
            </basic-button>
            <basic-button :width="'150px'">
              주문하기
            </basic-button>
          </div>
        </div>
      </product-main-desc-card>
    </div>

    <div class="desc">
      <product-img-txt></product-img-txt>
      <contact-us></contact-us>
    </div>
    <div class="comment">
      <comment-block :width="'80%'"></comment-block>
      <comment-block :width="'80%'"></comment-block>
      <comment-block :width="'80%'"></comment-block>
      <comment-block :width="'80%'"></comment-block>
    </div>
  </div>
</template>

<script>
// BLOCK
import ContentNavigation from "@/components/blocks/content_navigation.vue";
import ContentHeader from "@/components/blocks/content_header.vue";
import ProductMainDescCard from "@/components/blocks/product_main_desc_card.vue";
import EditorBlock from "@/components/blocks/editor_block.vue";
import CommentBlock from "@/components/blocks/comment_block.vue";
import ProductImgTxt from "@/components/blocks/product_img_txt.vue";
import ContactUs from "@/components/blocks/contact_us.vue";

// UNIT
import BasicButton from "@/components/units/basic_button.vue";
import BasicSelectbar from "@/components/units/basic_selectbar.vue";

// 트리거
import intersectionObserver from "@/mixins/intersection_observer.js";

// Vuex
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("product", {
      product_info: state => state.selected_product
    })
  },
  mounted() {
    console.log(this.product_info);
  },
  props: {
    product_title: {
      type: String,
      default: ""
    },
    product_desc_text: {
      type: String,
      default: ""
    },
    product_price: {
      type: String | Number,
      default: ""
    }
  },
  mixins: [
    intersectionObserver({
      targets: [".product-main-desc-card", ".desc", ".comment"],
      animation: "fade-up"
    })
  ],
  components: {
    ContentNavigation,
    ContentHeader,
    ProductMainDescCard,
    EditorBlock,
    BasicButton,
    BasicSelectbar,
    CommentBlock,
    ProductImgTxt,
    ContactUs
  }
};
</script>

<style lang="scss" scoped>
.product-desc-content-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  .content-header {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .product {
    width: 100%;
    margin-bottom: 35px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
    .product-main-desc-card {
    }
  }

  .desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
    margin-bottom: 35px;

    .editor-block {
      background-color: white;
    }
  }

  .comment {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 35px;
    background-color: #f2f2f2;
    > :not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .extra {
    margin-top: 20px;
    display: flex;
    height: 180px;
    flex-direction: column;
    justify-content: space-between;

    .buttons {
      display: flex;
      justify-content: flex-end;

      .basic-button {
        margin-left: 20px;
      }
    }
  }
}
</style>
