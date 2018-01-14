<template>
  <Header class="main-header">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">simple<span>kanban</span>
      </div>
      <new-task-button/>
    </Menu>

  </Header>
</template>

<script>
import NewTaskButton from './NewTaskButton'
export default {
  name: 'MainHeader',
  components: { NewTaskButton }
}
</script>

<style>
.layout-logo {
  /* width: 100px; */
  /* height: 30px; */
  line-height: 1;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  color: white;
  font-size: 31px;
  padding: 0;
  position: relative;
  top: 16px;
  left: 20px;
  font-weight: 300;
}
.layout-logo > span {
  /* font-size: 65%; */
  font-weight: 400;
}
.main-header {
  /* margin-bottom:45px; */
  padding: 0 10px;
}

</style>
