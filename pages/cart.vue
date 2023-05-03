<template>
  <div class="flex flex-col gap-5" v-if="cart.length">
    <table class="table-auto">
      <thead align="left">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Author</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in cart" :key="book + index">
          <td width="5%">
            <img
              class="h-[50px]"
              @error="replaceImageByDefault"
              :src="book.coverImageUrl"
            />
          </td>
          <td width="auto">{{ book.title }}</td>
          <td width="30%">{{ book.author }}</td>
          <td align="center" width="5%">{{ book.price }}$</td>
          <td align="center" width="5%">
            <button
              :disabled="!canDecrease(book)"
              @click="decreaseQuantity(book)"
            >
              -
            </button>
            {{ book?.quantity }}
            <button @click="increaseQuantity(book)">+</button>
          </td>
          <td align="center" width="5%">
            <button
              class="bg-red-400 text-white rounded-sm p-1"
              @click="removeBook(book)"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-end items-center gap-5 mt-5">
      <button
        class="bg-red-500 text-white rounded-sm px-2 py-1"
        @click="cart = []"
      >
        Clear Cart
      </button>
      <b>Total: {{ total }}$</b>
    </div>
  </div>

  <div v-else>
    <h1>Cart is empty</h1>
  </div>
</template>

<script setup>
  const cart = useCart();
  const total = computed(() =>
    cart.value
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      .toFixed(2),
  );

  function findBook(book) {
    return cart.value.find((b) => b.id === book.id);
  }

  function canDecrease(book) {
    return findBook(book).quantity > 1;
  }

  function increaseQuantity(book) {
    findBook(book).quantity++;
  }

  function decreaseQuantity(book) {
    if (!canDecrease(book)) return;
    findBook(book).quantity--;
  }

  function removeBook(book) {
    cart.value = cart.value.filter((b) => b.id !== book.id);
  }
</script>

<style scoped>
  tr:nth-child(odd) {
    background-color: #ddd;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }
  td,
  th {
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    td > img {
      width: 50px;
      height: 50px;
    }

    td,
    th {
      padding: 5px;
    }
  }
</style>
