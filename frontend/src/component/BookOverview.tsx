import {Book} from "../model/Book";
import BookCard from "./BookCard";

type booksProp = {
    books: Book[]
}

export default function BookOverview({books}: booksProp) {

    return <div>{books.map(element => <BookCard book={element} />)}</div>
}