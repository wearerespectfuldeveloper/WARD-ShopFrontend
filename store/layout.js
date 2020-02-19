export const state = () => ({
  notification_list: [
    {message: "", is_success: true }
  ],
  sidebar_toggled: true,
  infinite_scroll_triggerd: false
})

export const getters = {
  notification_color(state) {
    state.notification_list.map(item => {
      if (item.is_success === true) {
        item.color = 'green';
      } else {
        item.color = 'red';
      }
      return item;
    })
  }
}

export const mutations = {
  setNotification(state, payload) {
    state.notification_list.push(payload);
  },
  toggleSidebar(state) {
    state.sidebar_toggled = !state.sidebar_toggled;
  },
  infiniteScrollTrigger(state) {
    state.infinite_scroll_triggerd = true;
  },
  infiniteScrollStop(state) {
    state.infinite_scroll_triggerd = false;
  },
}

// export const actions = {
//   setNotification: {
//     root: true,
//     handler ({ commit }, { message }) {
//       commit({ message });
//     }
//   }
// }
