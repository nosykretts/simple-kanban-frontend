<template>
  <Content :style="{padding: '30px 30px'}">
    <Row :gutter="20">
      <bucket-list v-for="bucket of buckets" :key="bucket.name" :bucket="bucket" />
    </Row>
  </Content>
</template>

<script>
import BucketList from './BucketList'

export default {
  name: 'HomePage',
  components: { BucketList },
  data () {
    return {
      buckets: [
        {
          title: 'Back-Log',
          name: 'backlog',
          next: 'todo',
          prev: null
        },
        {
          title: 'To-Do',
          name: 'todo',
          next: 'doing',
          prev: 'backlog'
        },
        {
          title: 'Doing',
          name: 'doing',
          next: 'done',
          prev: 'todo'
        },
        {
          title: 'Done',
          name: 'done',
          next: null,
          prev: 'doing'
        }
      ]
    }
  }
}
</script>

<style>

</style>
