const bookRepository = require('../repositories/bookRepository');

const createBook = async (data) => {
    if (!data.title || !data.author || !data.year || !data.genre) {
        throw new Error ('Todos os campos (title, author, year, genre) são obrigatórios.');
    }
    return await bookRepository.createBook(data);
};

const listAllBooks = async () => {
    return await bookRepository.findAllBooks();
};

const updateBook = async (id, data) => {
    const updateBook = await bookRepository.updateBook(id, data);
    if (!updateBook) {
        throw new Error('Livro não encontrado.');
    }
    return updateBook;
}

const deleteBook = async (id) => {
    const deletedBook = await bookRepository.deleteBook(id);
    if (!deletedBook) {
        throw new Error('Livro não encontrado.');
    }
    return deletedBook;
}

const searchBooks = async (filters) => {
    if (Object.keys(filters).length === 0) {
        throw new Error('Nenhum filtro fornecido.');
    }
    return await bookRepository.searchBooks(filters);
}

module.exports = {
    createBook,
    listAllBooks,
    updateBook,
    deleteBook,
    searchBooks,
}