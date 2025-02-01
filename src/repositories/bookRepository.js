const Book = require('../models/book');

const createBook = async (bookData) => await Book.create(bookData);
const findAllBooks = async () => await Book.find ();
const findBookById = async (id) => await Book.findById (id);
const updateBook = async (id, bookData) => await Book.findByIdAndUpdate (id, bookData, { new: true });
const deleteBook = async (id) => await Book.findByIdAndDelete (id);
const searchBooks = async (filters) => await Book.find(filters);

module.exports = {
    createBook,
    findAllBooks,
    findBookById,
    updateBook,
    deleteBook,
    searchBooks,
};