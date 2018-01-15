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
  tasks: [],
  modalVisible: false,
  task: {
    title: '',
    description: '',
    point: '',
    status: ''
  },
  bucket: {
    title: '',
    name: '',
    next: '',
    prev: ''
  }
}

const getters = {
  tasks: state => state.tasks,
  backlogList: state => state.tasks.filter(task => task.status === 'backlog'),
  todoList: state => state.tasks.filter(task => task.status === 'todo'),
  doingList: state => state.tasks.filter(task => task.status === 'doing'),
  doneList: state => state.tasks.filter(task => task.status === 'done'),
  modalVisible: state => state.modalVisible,
  task: state => state.task,
  bucket: state => state.bucket
}

const actions = {
  setTasksRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('tasks', tasksRef)
  }),
  addTask ({commit}, {task}) {
    tasksRef.push(task)
  },
  changeStatus ({commit}, { key, to }) {
    // tasksRef.child(key).update({

    // })
  },
  deleteTask ({commit}, { key }) {
    tasksRef.child(key).remove()
  }
}

const mutations = {
  hideModal (state) {
    state.modalVisible = false
  },
  showModal (state, {task, bucket}) {
    state.task = task
    state.bucket = bucket
    state.modalVisible = true
  },
  ...firebaseMutations
}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})
