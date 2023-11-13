import { Router } from "express";
import { createBook, deleteBook, readBook, readBookByCategory, readBookByID, updateBook } from "../Controller/BookController";


const router:Router = Router()

router.route("/create-book").post(createBook)

/**
 * @swagger
 * /read-book:
 *  get:
 *     summary: this is the read-book endpoint
 *     description: this api na to get all books
 */

router.route("/read-book").get(readBook)
router.route("/read-book-id/:bookID").get(readBookByID)
router.route("/read-book-category").get(readBookByCategory)
router.route("/read-book/:bookID").patch(updateBook);
router.route("/read-book/:bookID").patch(deleteBook);

export default router