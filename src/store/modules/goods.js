const state = () => ({
    id: "",
})

const mutations = {
    set_id(state, id) {
      state.id = id
    },  
  
  };


export default {
    namespaced: true,
    state,
    mutations
  }