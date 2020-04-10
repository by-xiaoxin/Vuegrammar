const mutations = {
    add(state){
      return state.num++     // 先赋值;
    },
    del(state){
      return state.num--
    }
  }
export default mutations
