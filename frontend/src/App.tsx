import React from 'react';
import './App.css';
import useBooks from "./hooks/useBooks";
import Header from "./component/Header";
import BookOverview from "./component/BookOverview";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookGalleryPage from './pages/BookGalleryPage';

export default function App() {

    const books = useBooks()

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/gallery"} element={<BookGalleryPage books={books} />} />
            </Routes>
        </BrowserRouter>
    )
}

//<BookOverview books={books}/>
