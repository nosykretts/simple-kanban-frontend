<template>
  <Content :style="{padding: '30px 30px'}">
    <task-detail-modal/>
    <Row :gutter="20">
      <bucket-list v-for="bucket of buckets" :key="bucket.name" :bucket="bucket" />
    </Row>
  </Content>
</template>

<script>
import BucketList from './BucketList'
import TaskDetailModal from './TaskDetailModal'

export default {
  name: 'HomePage',
  components: { BucketList, TaskDetailModal },
  data () {
    return {}
  },
  computed: {
    buckets () {
      return [
        {
          title: 'Back-Log',
          name: 'backlog',
          next: 'todo',
          prev: null,
          tasks: this.$store.getters.backlogList
        },
        {
          title: 'To-Do',
          name: 'todo',
          next: 'doing',
          prev: 'backlog',
          tasks: this.$store.getters.todoList
        },
        {
          title: 'Doing',
          name: 'doing',
          next: 'done',
          prev: 'todo',
          tasks: this.$store.getters.doingList
        },
        {
          title: 'Done',
          name: 'done',
          next: null,
          prev: 'doing',
          tasks: this.$store.getters.doneList
        }
      ]
    }
  }
}
</script>

<style>

</style>
