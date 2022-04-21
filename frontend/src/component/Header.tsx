import { Link } from "react-router-dom";
import logo from "../img/books.jpg";
import "./Header.css";

export default function Header() {

    return (
        <header id="header">
            <img id="logo" src={logo} alt="books"/>
            <h1>Library</h1>
            <Link to={"/gallery"}>
                Gallery
            </Link>
        </header>
    )
}