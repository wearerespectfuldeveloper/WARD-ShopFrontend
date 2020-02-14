export const state = () => ({
  all_category_list: [],
  selected_category: null,
  previous_category: null,
})

export const getters = {
  selected(state) {
    return state.selected_category;
  }
}

export const mutations = {
  getCategories(state, { categories }) {
    state.all_category_list = categories;
  },
  selectCategory(state, idx) {
    let found;
    function rFindCategory(target_category) {
      if (!found) {
        if (target_category.idx == idx) {
          found = target_category;
        } else {
          for (let childCategory of target_category.childCategories) {
            if (childCategory.idx == idx) {
              found = childCategory;
              return;
            }
            rFindCategory(childCategory);
          }
        }
      }
    }
    for (let category of state.all_category_list) {
      rFindCategory(category);
    }
    state.selected_category = found;
  }
}

export const actions = {
  getCategories ({ commit }, { requestUrl }) {
    this.$axios.get(`${requestUrl ? requestUrl : ""}/categories`)
      .then(res => {
        commit('getCategories', { categories: res.data });
      })
      .catch(err => {
        commit('layout/setNotification', { message: "카테고리 조회 실패", is_success: false }, { root: true });
      })
  },
}