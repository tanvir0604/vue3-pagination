<script setup lang="ts">
import Pagination from "@/components/Pagination.vue";
import { ref } from 'vue';
// const url = ref('http://your-api-server-url');
const url = ref('https://jsonplaceholder.typicode.com/posts');
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
  items.value = res;
}
let loadingStart = () => {
  console.log('loading...');
};
let loadingEnd = () => {
  console.log('loading ends...');
};
</script>

<template>
  <table class="table">
    <tr>
      <th>Title</th>
      <th>Body</th>
    </tr>
    <tr v-for="item in items">
      <td>{{item.title}}</td>
      <td>{{item.body}}</td>
    </tr>
  </table>
  <Pagination :url="url" :class-name="className" :filters="filters" :headers="headers" :post-data="postData" @update="update" :loader-start="loadingStart" :loader-end="loadingEnd" :method="'get'"></Pagination>
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
