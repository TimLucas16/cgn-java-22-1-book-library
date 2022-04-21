import {Book} from "../model/Book";

type BookProp = {
    book: Book
}

export default function singleBook({book}: BookProp) {

    return (
        <div>
            <div>{book.title} {book.isbn}</div>
        </div>
    )
}