const bookList = document.getElementById('books');
const bookForm = document.getElementById('book-form');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const sortBySelect = document.getElementById('sort-by');
const sortButton = document.getElementById('sort-button');

// Array para armazenar livros
let books = [];

// Função para exibir livros
function displayBooks(booksToDisplay) {
    bookList.innerHTML = '';
    booksToDisplay.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${book.title} por ${book.author} (${book.year}) - Gênero: ${book.genre} - Avaliação: ${book.rating}`;
        bookList.appendChild(bookItem);
    });
}

// Adicionar novo livro
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        year: parseInt(document.getElementById('year').value),
        rating: parseInt(document.getElementById('rating').value)
    };

    books.push(newBook);
    displayBooks(books);
    saveBooks();
    bookForm.reset();
});

// Buscar livro
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
});

// Classificar livros
sortButton.addEventListener('click', () => {
    const sortBy = sortBySelect.value;
    const sortedBooks = [...books].sort((a, b) => {
        if (a[sortBy] > b[sortBy])
const bookList = document.getElementById('books');
const bookForm = document.getElementById('book-form');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const sortBySelect = document.getElementById('sort-by');
const sortButton = document.getElementById('sort-button');

// Array para armazenar livros
let books = [];

// Função para exibir livros
function displayBooks(booksToDisplay) {
    bookList.innerHTML = '';
    booksToDisplay.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${book.title} por ${book.author} (${book.year}) - Gênero: ${book.genre} - Avaliação: ${book.rating}`;
        bookList.appendChild(bookItem);
    });
}

// Adicionar novo livro
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        year: parseInt(document.getElementById('year').value),
        rating: parseInt(document.getElementById('rating').value)
    };

    books.push(newBook);
    displayBooks(books);
    saveBooks();
    bookForm.reset();
});

// Buscar livro
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
});
