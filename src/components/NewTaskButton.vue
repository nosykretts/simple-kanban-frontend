<template>
  <div>
    <Button @click="modalOpened=true" size="small" type="primary" class="new-task-menu-item" icon="plus" >New Task</Button>
    <Modal  v-model="modalOpened" title="New Task" ok-text="Save" cancel-text="Cancel" @on-ok="handleAddTask">
      <Form  :model="task" label-position="top" >
        <FormItem label="Task name">
          <Input v-model="task.title"></Input>
        </FormItem>
        <FormItem label="Description">
          <Input type="textarea" v-model="task.description"></Input>
        </FormItem>
        <FormItem label="Point">
          <Input v-model.number="task.point"></Input>
        </FormItem>
        <FormItem label="Assigned to">
          <Input v-model="task.assignedTo"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'NewTaskButton',
  data () {
    return {
      modalOpened: false,
      task: {
        title: '',
        description: '',
        point: '',
        assignedTo: ''
      }
    }
  },
  methods: {
    handleAddTask () {
      console.log(this)
    }
  }
}
</script>

<style>
.new-task-menu-item {
  position: relative !important;
  float: right !important;
  top: 17px;
  right: 20px;
}
</style>
