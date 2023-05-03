<template>
  <main>
    <Navbar />

    <div class="p-3 md:p-5 lg:p-10 xl:p-20">
      <slot></slot>
    </div>
  </main>
</template>

<script setup>
  const cart = useCart();

  if (process.client)
    cart.value = JSON.parse(localStorage.getItem('cart')) || [];

  // Anything change on cart state, the watch function will be set to localStorage
  watch(
    () => cart.value,
    (current) => {
      localStorage.setItem('cart', JSON.stringify(current));
    },
    { deep: true },
  );
</script>

<style>
  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    * {
      font-size: 0.9rem;
    }

    img {
      max-height: 100px !important;
    }
  }
</style>
