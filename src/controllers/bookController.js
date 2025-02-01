const bookService = require('../services/bookService');

const createBook = async (req, res, next) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
};

const listAllBooks = async (req, res, next) => {
    try {
        const books = await bookService.listAllBooks();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

const updateBook = async (req, res, next) => {
    try {
        const {id} = req.params;
        const updatedBook = await bookService.updateBook(id, req.body);
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deletedBook = await bookService.deleteBook(id);
        res.status(200).json({message: "livro deletado com sucesso!", deletedBook});
    } catch (error) {
        next(error);
    }
};

const searchBooks = async (req, res, next) => {
    try {
        const books = await bookService.searchBooks(req.query);
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBook,
    listAllBooks,
    updateBook,
    deleteBook,
    searchBooks,
};