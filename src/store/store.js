import Vue from 'vue'
import Vuex from 'vuex'
import task  from '../class/task'

Vue.use(Vuex)
export const store = new Vuex.Store({

  state: {
    todos:[],
    colors: ['#F44336','#9C27B0','#2196F3','#009688','#FF9800',],
    lastId: 0,
    message: "",
    color: "#FF9800",
    onlyDone: false
  },
  mutations: {
    incrementLastId(state){
      state.lastId++
    },
    addTodo(state,payload){
      let tasker = new task(payload.title, false, payload.color);
      state.todos.push(tasker);
      state.message = ""
    },
    updateMessage(state, payload) {
      state.message = payload
    },
    updateDone(state) {
      state.onlyDone = !state.onlyDone;
    },
    removeTodo(state, payload) {
      let id = payload;
      state.todos.splice(id, 1);
    },
    doneTodo(state, payload) {
      let id = payload;
      let status = !state.todos[id].done;
      state.todos[id].done = status;
    },
    deleteAllCompleted(state, payload) {
      state.todos = state.todos.filter(todo => !todo.done);
    }
  },
  actions: {
    addTodo(context,payload){
      context.commit('addTodo', payload);
    },
    removeTodo(context,payload){

    },
    markAsCompleted(context,payload){},
    changeTodoColor(context,payload){},
    deleteAllCompleted(context,payload){
      context.commit('deleteAllCompleted')
    },
  },
  getters: {
    getTodos: state => {
      if (state.onlyDone) {
        return state.todos.filter(todo => !todo.done)
      } else {
        return state.todos
      }
    }
  }
})
