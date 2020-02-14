<template>
  <div class="page-sidebar elevation-1"
    :style="{
      'width': width,
      'height': height
    }"
  >
    <ul
      class="list"
      v-for="item in items"
      :key="item.idx"
    > 
      <h1 class="list-title font--small-caps" @click="clickEvent(item.idx); getProducts({categoryIdx: item.idx})">
        {{item.name}}
      </h1>
      <divider
      ></divider>
      <li
        class="list-item font--small"
        v-for="childCategory in item.childCategories"
        :key="childCategory.idx"
        @click="clickEvent(childCategory.idx); getProducts({categoryIdx: childCategory.idx})"
      >
        <svg class="icon" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z" fill="#736C49" fill-opacity="0.54"/>
        </svg>

        <span class="text">{{childCategory.name}}</span>
        
      </li>
      
    </ul>
  
  </div>
</template>

<script>
import Divider from '@/components/units/divider.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    Divider
  },
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    clickEvent: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    ...mapActions('product', ['getProducts']),
  }
}
</script>

<style lang="scss" scoped>
.page-sidebar {
  background-color: $Light;

  .list {
    width: 100%;

    .list-title {
      cursor: pointer;
      padding: 19px;
      color: $Dark;
    }

    .list-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 16px;

      @include border-bottom;

      &:hover {
        color: $Tertiary;
        background-color: rgba($Tertiary ,0.1);
        transition: background-color 0.5s;

        .icon {
          path {
            fill: $Tertiary;
          }
        }
      }

      .icon {
        margin-right: 32px;
      }

      .text {
        color: $Dark;
      }
    }
  }

}
</style>