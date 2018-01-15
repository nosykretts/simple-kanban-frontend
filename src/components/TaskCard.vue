<template>
  <Card class="task-card-item">
    <p slot="title">{{task.title}}</p>
    <div>
      <p>Point: {{task.point}}</p>
      <p>Assigned to: <span>{{task.assignedTo}}</span></p>
      <br><Button size="small" long type="ghost" @click="openModal">Details</Button>
    </div>
  </Card>
</template>

<script>

export default {
  name: 'TaskCard',
  props: ['task', 'bucket'],
  components: { },
  methods: {
    openModal () {
      this.$store.commit('showModal', {
        task: this.task,
        bucket: this.bucket
      })
    }
  }
}
</script>

<style>
.task-card-item + .task-card-item {
  margin-top: 10px;
}
.task-card-item p {
  font-weight: normal !important;
}
.task-card-item .ivu-card-head {
  /* padding: 14px 5px; */
}
.expand-icon{
  font-size:130%;
}
</style>
