<template>
  <Col span="6">
    <Card :bordered="false" shadow class="bucket-list-card">
      <p slot="title">{{bucket.title}}</p>
      <div style="min-height: 50px;">
        <task-card v-for="task in bucket.tasks" :key="task['.key']" :task="task" :bucket="bucket"/>
      </div>
    </Card>
  </Col>
</template>

<script>
import TaskCard from './TaskCard'

export default {
  name: 'BucketList',
  props: ['bucket'],
  components: { TaskCard }
}
</script>

<style>
.bucket-list-card{
  background: #f3f3f3;
}
.bucket-list-card > .ivu-card-head{
  background: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
