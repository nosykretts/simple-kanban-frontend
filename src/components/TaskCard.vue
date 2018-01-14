<template>
  <Card class="task-card-item">
    <p slot="title">Borderless card</p>
    <div>
      <p>Point: 100</p>
      <p>Assigned to: <span>Fajar Patappari</span></p>
      <br><Button size="small" long type="ghost">Details</Button>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'TaskCard'
}
</script>

<style>
.task-card-item {
  margin-bottom: 10px;
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
