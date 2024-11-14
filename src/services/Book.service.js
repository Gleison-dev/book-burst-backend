import { BookEntity } from "../entities/book.entity.js";
import { ERRORS, SUCESS } from "../shared/book.message.js";

class BookService {
  async createBookService(title, writer, genre, synopsis, year_release) {
    try {
      await BookEntity.sync();
      const verifyBookExists = await BookEntity.findOne({
        where: {
          title,
          writer,
        },
      });
      if (verifyBookExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const createBook = await BookEntity.create({
        title,
        writer,
        genre,
        synopsis,
        year_release,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return console.error(error);
    }
  }

  async getAllBooks() {
    try {
      const books = await BookEntity.findAll();
      return books;
    } catch (error) {
      console.error(error);
    }
  }

  async getBookByTitle(title) {
    try {
      const verififyBookTitle = await BookEntity.findOne({
        where: {
          title,
        },
      });
      if (!verififyBookTitle) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const bookByTitle = await BookEntity.findAll({
        where: {
          title,
        },
      });
      return bookByTitle;
    } catch (error) {
      return console.error(error);
    }
  }
}
