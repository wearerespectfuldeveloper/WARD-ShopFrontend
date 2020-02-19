<template>
  <div
    class="product-img-txt"
    :style="{
      width: width,
      height: height
    }"
  >
    <div class="product_img"></div>
    <div class="product_txts">
      <h2 class="product_txt">
        {{ product_text }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    product_text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
  }
};
</script>
<style lang="scss" scoped>
.product-img-txt {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .product_img {
    margin-top: 49px;
    width: 100%;
    height: 250px;
    background: #ffffff;
  }
  .product_txts {
    margin-bottom: 90px;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product_txt {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>