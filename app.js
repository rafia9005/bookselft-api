require("dotenv").config(); // Memuat variabel lingkungan dari file .env

const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());

const books = [];

// semua data buku di tampilkan di root
app.get('/', (req, res) => {
    const simplifiedBooks = books.map((book) => {
      return {
        id: book.id,
        title: book.title,
        author: book.author
      };
    });
  
    res.json(simplifiedBooks);
  });
  

// Menyimpan data buku baru
app.post("/books", (req, res) => {
  const newBooks = req.body;

  newBooks.forEach((book) => {
    book.id = uuidv4(); // Menambahkan ID menggunakan uuidv4()
    books.push(book);
    console.log("Buku telah disimpan:", book);
  });

  res.sendStatus(201);
});

// Mengambil semua data buku
app.get("/books", (req, res) => {
  res.json(books);
});

// Mengambil detail buku berdasarkan ID
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  // Cari buku berdasarkan ID
  const book = books.find((book) => book.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Buku tidak ditemukan" });
  }
});

// Menghapus data buku berdasarkan ID
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    console.log("Buku telah dihapus:", deletedBook);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Buku tidak ditemukan" });
  }
});


// Mengubah data buku berdasarkan ID
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const { title, author, year, publisher, penerbit } = req.body;
  
    // Cari buku berdasarkan ID
    const book = books.find((book) => book.id === bookId);
  
    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.year = year || book.year;
      book.publisher = publisher || book.publisher;
      book.penerbit = penerbit || book.penerbit;
  
      console.log('Buku telah diubah:', book);
      res.json(book);
    } else {
      res.status(404).json({ error: 'Buku tidak ditemukan' });
    }
  });
  

app.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
