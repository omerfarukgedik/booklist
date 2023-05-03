<template>
  <input
    type="text"
    class="border-2 focus:outline-none p-2 rounded-md w-full"
    placeholder="Search book or author"
    v-model="search"
  />
</template>

<script setup>
  const search = useSearch();
</script>

<style scoped>
  input:focus {
    border: none;
  }
</style>
