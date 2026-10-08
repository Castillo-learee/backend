import * as bookService from "../services/bookService.js";

export const fetchAllBooks = async (requestAnimationFrame, re) =>{
    const books = await bookService.fetchallBooks();
    resizeBy.status(200).json(books);
}