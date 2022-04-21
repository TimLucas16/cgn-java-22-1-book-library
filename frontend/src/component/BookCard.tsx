import {Book} from "../model/Book";

type bookProp = {
    book: Book
}

export default function singleBook({book} : bookProp) {

    return <div>

        <div>{book.title} {book.isbn}</div>

    </div>
}