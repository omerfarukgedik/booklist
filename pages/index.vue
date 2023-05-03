<template>
  <div class="flex flex-col gap-5">
    <SearchBar />
    <div v-if="pending">Loading ...</div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      <Book v-for="book in _filteredBooks" :book="book" :key="book.title" />
    </div>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();

  const { pending, data: books } = useFetch(`${config.public.apiBase}/books`);
  const _filteredBooks = ref(books.value);

  const search = useSearch();
  import debounce from 'lodash/debounce';
  watch(
    search,
    debounce((value) => {
      _filteredBooks.value = books.value.filter(
        (book) =>
          book.title.toLowerCase().includes(value.toLowerCase()) ||
          book.author.toLowerCase().includes(value.toLowerCase()),
      );
    }, 500),
  );
</script>
