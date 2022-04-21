import {Book} from "../model/Book";
import BookOverview from "../component/BookOverview";

type BookGalleryPageProps = {
    books: Book[]
}

export default function BookGalleryPage({books}: BookGalleryPageProps) {

    return (
        <div>
            <BookOverview books={books}/>
        </div>
    )

}