import React from "react";

const Book = ({ image, title, author, Buy }) => {
  return (
    <article className="book" onDoubleClick={() => console.log(title)}>
      <img src={image} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <a>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open(Buy, "_blank", "noopener,noreferrer");
          }}
        >
          Click to Buy
        </button>
      </a>
    </article>
  );
};

export default Book;
