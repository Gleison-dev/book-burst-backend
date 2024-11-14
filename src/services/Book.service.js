import { BookEntity } from "../entities/book.entity.js";
import { SUCESS } from "../shared/book.message.js";

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
}
