<template>
  <Modal v-model="modalVisible" title="Task Detail">
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
      <table>
        <tr>
          <td>
            <Button v-if="bucket.next" style="align-self:flex-start;" type="warning" @click="handleChangeStatus('prev')">{{bucket.prev}}</Button>

          </td>
          <td style="text-align:center">
            <Button type="error" @click="handleDelete">Delete</Button>

          </td>
          <td style="text-align:right">
            <Button v-if="bucket.prev" type="primary" @click="handleChangeStatus('next')">{{bucket.next}}</Button>
          </td>
        </tr>
      </table>
    </div>
  </Modal>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TaskDetailModal',
  methods: {
    handleDelete() {
      console.log(this.task['.key'])
      this.$store.dispatch('deleteTask', {
        key: this.task['.key']
      })
    },
    handleChangeStatus(prevnext) {
      this.$store.dispatch('changeStatus', {
        key: this.task['.key'],
        to: prevnext === 'next' ? this.bucket.next : this.bucket.prev
      })
    }
  },
  computed: {
    ...mapGetters(['task', 'bucket', 'tasks']),
    modalVisible: {
      get() {
        return this.$store.getters['modalVisible']
      },
      set() {
        this.$store.commit('hideModal')
      }
    }
  }
}
</script>

<style>
.footer-flex {
  display: flex;
  justify-content: space-between;
}
.footer-flex td {
  width: 33%;
  text-align: left;
}
.footer-flex table{
  width: 100%;
}
</style>
