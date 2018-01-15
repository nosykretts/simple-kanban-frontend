<template>
  <Modal  v-model="modalVisible" title="Task Detail">
      <p slot="header" style="color:#f60;">
        <Icon type="information-circled"></Icon>
        <span>Task Detail</span>
      </p>
      <div>
        <p>
          <strong>Title</strong>
        </p>
        <p>{{task.title}}</p>
        <p>
          <strong>Description</strong>
        </p>
        <p>{{task.description}}</p>
        <p>
          <strong>Status:</strong>
        </p>
        <p>{{task.status}}</p>
        <p>
          <strong>Assigned to:</strong>
        </p>
        <p>{{task.assignedTo}}</p>
      </div>
      <div slot="footer" class="footer-flex">
        <Button style="align-self:flex-start;" v-if="bucket.prev" type="warning" @click="handleChangeStatus('prev')">{{bucket.prev}}</Button>
        <Button type="error" @click="handleDelete">Delete</Button>
        <Button style="float:right" v-if="bucket.next" type="primary" @click="handleChangeStatus('next')">{{bucket.next}}</Button>
      </div>
   

  </Modal>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TaskDetailModal',
  methods: {
    handleDelete () {
      this.store.dispatch('deleteTask', {
        key: this.task['.key']
      })
    },
    handleChangeStatus (prevnext) {
      this.store.dispatch('changeStatus', {
        key: this.task['.key'],
        to: prevnext === 'next' ? this.bucket.next : this.bucket.prev
      })
    },
    visibleChange (xxx) {
      console.log(xxx)
    }
  },
  computed: {
    ...mapGetters(['task', 'bucket', 'tasks']),
    modalVisible: {
      get () {
        // console.log(this.$store.getters['modalVisible'])
        return this.$store.getters['modalVisible']
      },
      set () {
        this.$store.commit('hideModal')
      }
    }
  }
}
</script>

<style>
.footer-flex{
  display: flex;
  justify-content: center;
}
</style>
