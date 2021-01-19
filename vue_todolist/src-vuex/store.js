import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//状态
const state = {
    count: 0
}
//包含多个更新state函数的对象
const mutations = {
    increase() {
        state.count++
    },
    decrease() {
        state.count--
    }
}
//包含多个对应事件的回调函数的对象
const actions = {
    increase({commit}) {
        commit('increase')
    },
    decrease({commit}) {
        commit('decrease')
    }
}
//包含多个getter计算函数的对象
const getters = {

}

export default new Vuex.Store({
    state, 
    mutations, 
    actions, 
    getters 
})