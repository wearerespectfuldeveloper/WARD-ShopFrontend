<template>
<div class="infinite-scroll-trigger">
  <loading-dots v-if="loading"></loading-dots>
  {{message}}
</div>
</template>

<script>
import LoadingDots from '@/components/units/loading_dots.vue';

export default {
  name: 'intersection_observer',
  data() {
    return {
      observer: null,
      loading: false,
      message: ""
    }
  },
  props: {
    triggerEvent: {
      type: Function,
      default: () => {}
    },
    eventParams: {
      type: Object,
      default: () => ({})
    },
    failedMessage: {
      type: String,
      default: "오류"
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // 비동기 데이터 GET 작업
        this.loading = true;
        // this.triggerEvent(eventParams)
        //   .then(res => {
        //     this.loading = false;
        //   })
        //   .catch(err => {
        //     this.loading = false;
        //     this.message = this.failedMessage;
        //   })
        // // 성공시 loading 값을 true 로 전환 실패시 그대로 둔다.

      }
    });
    this.observer.observe(this.$el);
  },
  components: {
    LoadingDots
  }
}
</script>

<style lang="scss" scoped>
.infinite-scroll-trigger {

}
</style>