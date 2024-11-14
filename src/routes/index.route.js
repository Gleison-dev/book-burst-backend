import { Router } from "express";
import { bookRoute } from "../routes/book.route.js";

const router = Router();

router.use(bookRoute);

export { router };
