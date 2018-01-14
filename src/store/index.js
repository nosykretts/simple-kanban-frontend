import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseAction, firebaseMutations} from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex)

const config = {
  databaseURL: 'https://seismic-handler-138718.firebaseio.com/'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const tasksRef = db.ref('tasks')


const state = {
  tasks: []
}

const getters = {
  tasks: state => state.tasks,
  backlogList: state => state.tasks.filter(task => task.status === 'backlog'),
  todoList: state => state.tasks.filter(task => task.status === 'todo'),
  doingList: state => state.tasks.filter(task => task.status === 'doing'),
  doneList: state => state.tasks.filter(task => task.status === 'done')
}

const actions = {
  setTasksRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('tasks', ref)
  }),
  addTask ({commit}, {task}) {
    tasksRef.push(task)
  },
  moveTask ({commit}, { key, to }) {
    tasksRef.child(key).update({
      
    })
  },
  removeTask ({commit}) {

  }
}

const mutations = {
  ...firebaseMutations
}

export default new Vuex.Store({
  // VuexFire will check the type of the property to bind as an array or as
  // an object
  strict: true,
  state,
  getters,
  actions,
  mutations
})
