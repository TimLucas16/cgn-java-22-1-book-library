import {useEffect, useState} from "react";
import {Book} from "../model/Book";
import axios from "axios";

export default function useBooks() {

    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        axios.get(`http://localhost:8080/book`)
            .then(response => response.data)
            .then(body => setBooks(body))
            .catch(console.error)
    }, [])

    return books
}