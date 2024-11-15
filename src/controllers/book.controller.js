import { BookService } from "../services/Book.service.js";

const instanceBookService = new BookService();

const createBook = async (req, res) => {
  const { title, writer, genre, synopsis, year_release, link } = req.body;
  const newBook = await instanceBookService.createBookService(
    title,
    writer,
    genre,
    synopsis,
    year_release,
    link
  );
  res.status(201).json({ newBook });
};

const getAllBooks = async (req, res) => {
  const books = await instanceBookService.getAllBooks();
  res.json({ books });
};

const getBookByTitle = async (req, res) => {
  const { title } = req.body;
  const bookByTitle = await instanceBookService.getBookByTitle(title);
  res.json({ bookByTitle });
};

const getBookByWriter = async (req, res) => {
  const { writer } = req.body;
  const bookByWriter = await instanceBookService.getBookByWriter(writer);
  res.json({ bookByWriter });
};

const getBookByGenre = async (req, res) => {
  const { genre } = req.body;
  const bookByGenre = await instanceBookService.getBookByGenre(genre);
  res.json({ bookByGenre });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await instanceBookService.deleteBookService(id);
  res.json({ deletedBook });
};

export {
  createBook,
  getAllBooks,
  getBookByGenre,
  getBookByTitle,
  getBookByWriter,
  deleteBook,
};
