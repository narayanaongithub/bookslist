import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
// variables setup

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section>
      <div className="HeadingContainer">
        <h1 style={{ color: "white" }} className="TopHeading">
          My Books List
        </h1>
      </div>
      <BookList />
    </section>
  </React.StrictMode>
);
