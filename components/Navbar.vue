<template>
  <nav class="bg-red-500 text-white p-3 flex justify-between">
    <h2 class="font-bold">
      <NuxtLink to="/">BOOKLIST</NuxtLink>
    </h2>
    <h2 class="i-mdi-home">
      <NuxtLink to="/cart">Cart ({{ cartCount }})</NuxtLink>
    </h2>
  </nav>
</template>

<script setup>
  const cart = useCart();
  const cartCount = computed(() =>
    cart.value.reduce((acc, curr) => acc + curr.quantity, 0),
  );
</script>
