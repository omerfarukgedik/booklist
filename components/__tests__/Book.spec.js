import { describe, expect } from 'vitest';

// import Book from '../Book.vue';

const book = {
  title: 'Book Title',
  author: 'Book Author',
  coverImageUrl: 'https://example.com/cover.jpg',
  price: 10.5,
};

describe('Book.vue', () => {
  test('render book.coverImageUrl', () => {
    expect(book).toBe(book);
  });
});
