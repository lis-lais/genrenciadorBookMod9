const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.listAllBooks);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/busca', bookController.searchBooks);

module.exports = router;
