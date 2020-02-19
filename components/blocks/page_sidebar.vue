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
      <h1 class="list-title font--small-caps" @click="toggleList(item.idx);">
        {{item.name}}
      </h1>
      
      <li
        class="list-item font--small"
        v-for="childCategory in item.childCategories"
        v-show="toggled_list.find(x => x === item.idx)"
        :key="childCategory.idx"
        @click="clickEvent(childCategory.idx); getProducts({categoryIdx: childCategory.idx})"
      >
        <svg class="icon" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z" fill="#736C49" fill-opacity="0.54"/>
        </svg>

        <span class="text">{{childCategory.name}}</span>
        <divider
      ></divider>
      </li>
      
      
    </ul>
  
  </div>
</template>

<script>
import Divider from '@/components/units/divider.vue';

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      toggled_list: []
    }
  },
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
    toggleList(idx) {

      const targetIndex = this.toggled_list.findIndex(x => x === idx);

      console.log('targetIndex', targetIndex)

      if (targetIndex !== -1) {
        this.toggled_list.splice(targetIndex, 1);
      } else {
        this.toggled_list.push(idx);
      }

      console.log(this.toggled_list);

    }
  }
}
</script>

<style lang="scss" scoped>
.page-sidebar {
  background-color: $Light;
  @include container-scroll-y;

  .list {
    width: 100%;

    .list-title {
      padding: 19px;
      color: $Dark;
      cursor: pointer;
      @include border-bottom;
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