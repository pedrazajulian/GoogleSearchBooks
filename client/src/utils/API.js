// Required module
import axios from "axios";

export default {
    // Retrieves Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Saves book to DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book with given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};