const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000   

const Book = mongoose.model('Book', {
    title: String,
    author: String,
    year: Number,
    genre: String
});

app.get('/', async (req, res) => {
    const books = await Book.find();
    return res.send(books)
})

app.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    return res.send(book);
})

app.put('/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre,
    }, { new: true });
    if (!book) return res.status(404).send('Book not found');
    return res.send(book);
})

app.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre,
    })
    await book.save();
    return res.send(book);
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://lis87lala:EaWa4X7j7OGdr0Lg@starwars-api.yomdy.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api');
    console.log(`Server running at http://localhost:${port}`)
});