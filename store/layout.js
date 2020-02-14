export const state = () => ({
  notification_list: [
    {message: "", is_success: true }
  ]
})

export const getters = {
  notification_color (state) {
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
  setNotification (state, payload) {
    state.notification_list.push(payload);
    console.log('message', state.notification_list);
  }
}

// export const actions = {
//   setNotification: {
//     root: true,
//     handler ({ commit }, { message }) {
//       commit({ message });
//     }
//   }
// }
