<template>
  <div class="bg-red-300 text-black rounded-lg relative">
    <img
      @error="replaceImageByDefault"
      :src="book.coverImageUrl"
      class="h-[200px]"
    />

    <div class="flex flex-col justify-between">
      <div class="p-3 text-center flex flex-col gap-3 h-40 md:h-[200px]">
        <h2 class="font-bold">{{ book.title }}</h2>
        <p class="text-sm">{{ book.author }}</p>
        <p class="text-sm">{{ book.price }}$</p>
      </div>
      <button
        class="absolute bottom-0 flex justify-center items-center bg-slate-700 text-white w-full py-2"
        @click="addToCard(book)"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    book: Object,
  });

  const cart = useCart();
  const isImageLoaded = ref(false);

  function imgOnLoad() {
    isImageLoaded.value = true;
  }

  function findBook(book) {
    return cart.value.find((b) => b.id === book.id);
  }

  function addToCard(book) {
    if (findBook(book)) {
      findBook(book).quantity++;
      return;
    }

    cart.value.push({ ...book, quantity: 1 });
  }
</script>
