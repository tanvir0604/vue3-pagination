<script setup lang="ts">
import Pagination from "@/components/Pagination.vue";
import { ref } from 'vue';
const url = ref('http://your-api-server-url');
const className = 'my-pagination';
const items = ref([]);
const filters = ref({
  param1: 'value1',
  param2: 'value2'
});
const headers = {'tokane': 'your-token-here', 'other-header': 'other-header-value'};
const postData = {'param1': 'value1', 'param2': 'value2'};
const update = (res) => {
  console.log(res);
  items.value = res.items;
}
</script>

<template>
  <table class="table">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr v-for="item in items">
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
    </tr>
  </table>
  <Pagination :url="url" :class-name="className" :filters="filters" :headers="headers" :post-data="postData" @update="update"></Pagination>
</template>

<style>
  .my-pagination .page-link{
    background-color: #2c3e50;
    color: white;
  }
  .my-pagination .page-link:hover{
    opacity: .8;
  }
  .my-pagination .active .page-link{
    background-color: white;
    color: #2c3e50;
  }
</style>
