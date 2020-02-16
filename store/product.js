export const state = () => ({
  all_products: null,
  found_products: null,
});

export const getters = {
  
}

export const mutations = {

  getProducts (state, { products }) {
    state.all_products = products;
  },
  findProducts (state, { products }) {
    state.found_products = products;
  },
  createProduct (state, { product }) {
    state.all_products.push(product)
  },
  updateProduct (state, { product }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === product.id) {
        return x;
      }
    });
    state.all_products.splice(target_index, 1, product);
  },
  deleteProduct (state, { product }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === product.id) {
        return x;
      }
      state.all_products.splice(target_index, 1);
    });
  },
  productSort (state, { idx, sort_by }) {
    switch (sort_by) {
      case "popularity":
        
        break;

      case "rating":
        
        break;

      case "high-price":
        
        break;

      case "low-price":
        
        break;

      default:
        break;
    }
  }
}

export const actions = {
  getProducts ({ commit }, { requestUrl, categoryIdx }) {

    const now = new Date();

    const year = String(now.getFullYear());
    let month = String(now.getMonth() + 1);
    if (month.length === 1) {
      month = "0" + month;
    }
    let date = String(now.getDate());
    if (date.length === 1) {
      date = "0" + date;
    }
    let hours = String(now.getHours());
    if (hours.length === 1) {
      hours = "0" + hours;
    }
    let minutes = String(now.getMinutes());
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }
    let seconds = String(now.getSeconds());
    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }
    let milliseconds = String(now.getMilliseconds());

    if (milliseconds.length === 2) {
      milliseconds = "0" + milliseconds;
    } else if (milliseconds.length === 1) {
      milliseconds = "00" + milliseconds;
    }

    const dates = [year, month, date];
    const time_list = [hours, minutes, seconds + "." + milliseconds];

    const now_formatted = dates.join("-") + "T" + time_list.join(":");

    this.$axios.get(`${requestUrl ? requestUrl : ""}/products?categoryIdx=${categoryIdx}&createdDate=${now_formatted}`)
      .then(res => {
        commit('getProducts', { products: res.data });
      })
      .catch(err => {
        commit('layout/setNotification', { message: "상품 조회 실패", is_success: false }, { root: true });
      })
  },
  // 하나만 아이디를 통해 찾는 경우는 없지 않나?
  findProductById({ commit }, { requestUrl, idx }) {
    this.$axios.get(`${requestUrl || process.env.BASE_URL}/products/${idx}`)
      .then(products => {
        commit('findProducts', { products });
      })
      .catch(err => {
        commit('setNotification', { message: "상품 검색 실패", is_success: false });
      })
  },
  findProducts({ commit }, { requestUrl, condition_obj }) {
    this.$axios.get(`${requestUrl || process.env.BASE_URL}/products/search?$name=${condition_obj.name}`)
      .then(products => {
        commit('findProducts', { products });
      })
      .catch(err => {
        commit('setNotification', { message: "상품 검색 실패", is_success: false });
      })
  },
  createProduct({ commit }, { requestUrl, title, desc, image_url, price }) {
    this.$axios.post(`${requestUrl || process.env.BASE_URL}/products/create`, {
      title: title,
      desc: desc,
      imageUrl: image_url,
      price: price
    })
      .then(result => {
        const product = result;
        if (product) {
          commit('createProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 생성 실패", is_success: false });
      })
  },
  updateProduct({ commit }, { requestUrl, idx, title, desc, image_url, price }) {
    this.$axios.put(`${requestUrl || process.env.BASE_URL}/products`, {
      idx: idx,
      title: title,
      desc: desc,
      imageUrl: image_url,
      price: price
    })
      .then(result => {
        const product = result;
        if (product) {
          commit('updateProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 갱신 실패", is_success: false });
      })
  },
  deleteProduct({ commit }, { requestUrl}) {
    this.$axios.delete(`${requestUrl || process.env.BASE_URL}/products/${idx}`)
      .then(result => {
        const product = result;
        if (product) {
          commit('deleteProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 삭제 실패", is_success: false });

      })
  }
}