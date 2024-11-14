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
      const verifyBookTitle = await BookEntity.findOne({
        where: {
          title,
        },
      });
      if (!verifyBookTitle) {
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

  async getBookByWriter(writer) {
    try {
      const verifyBookWriter = await BookEntity.findOne({
        where: {
          writer,
        },
      });
      if (!verifyBookWriter) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const bookByWriter = await BookEntity.findAll({
        where: {
          writer,
        },
      });
      return bookByWriter;
    } catch (error) {
      return console.error(error);
    }
  }

  async getBookByGenre(genre) {
    try {
      const verifyBookGenre = await BookEntity.findOne({
        where: {
          genre,
        },
      });
      if (!verifyBookGenre) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const bookByGenre = await BookEntity.findAll({
        where: {
          genre,
        },
      });
      return bookByGenre;
    } catch (error) {
      return console.error(error);
    }
  }

  async deleteBookService(id) {
    try {
      const verifyBookId = await BookEntity.findByPk(id);
      if (!verifyBookId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const deleteBook = await BookEntity.destroy({
        where: {
          id,
        },
      });
      return `${SUCESS.DELETED}`;
    } catch (error) {
      return console.error(error);
    }
  }
}

export { BookService };
