const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data - array of books
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id - Update details of a specific book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    const { title, author } = req.body;
    books[index] = { id, title, author };
    res.json(books[index]);
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

