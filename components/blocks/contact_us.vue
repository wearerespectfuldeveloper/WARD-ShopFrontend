<template>
  <div
    class="contact-us"
    :style="{
      width: width,
      height: height
    }"
  >
    <div class="contact-body">
      <h1 class="contact-text ">
        {{ text }}
      </h1>
      <h2 class="contact-text sub_text">
        {{ sub_text }}
      </h2>
    </div>
    <div class="contact-buttons">
      <a class="contact-button dark font--link" :href="button_text01.link">
        {{ button_text01 }}
      </a>
      <a class="contact-button white font--link" :href="button_text02.link">
        {{ button_text02 }}
      </a>
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
    text: {
      type: String,
      default: "더 궁금한게 있으신가요?"
    },
    sub_text: {
      type: String,
      default: "contact to seller"
    },
    button_text01: {
      type: String,
      default: "판매자 문의",
      link: "#"
    },
    button_text02: {
      type: String,
      default: "관련 상품 목록",
      link: "#"
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-us {
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .contact-body {
    .contact-text {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 45px;
      color: #000000;
    }
    .sub_text {
      font-weight: normal;
    }
  }
  .contact-buttons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    .contact-button {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      text-align: center;
      border-radius: 5px;
      text-decoration: none;
      padding: 10px;
    }
    .dark {
      background-color: #000000;
      color: $Light;
      margin-right: 16px;
    }
    .white {
      background-color: $Light;
      color: $TextBlack;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    .contact-body {
      margin-bottom: 20px;
    }
  }
}
</style>
