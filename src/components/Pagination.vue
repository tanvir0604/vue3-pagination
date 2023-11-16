<script setup lang="ts">
const props = defineProps({
  btnText: { type: String, required: false }
});
</script>

<template>
<button>{{ props.btnText }}</button>
</template>

<style scoped>

</style>