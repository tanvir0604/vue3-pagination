<script setup lang="ts">
import Pagination from "@/components/Pagination.vue";
</script>

<template>
  <Pagination url="http://localhost/test.json" class-name="test"></Pagination>
</template>

<style>
  .test .page-link{
    background-color: #2c3e50;
    color: white;
  }
  .test .page-link:hover{
    opacity: .8;
  }
  .test .active .page-link{
    background-color: white;
    color: #2c3e50;
  }
</style>
