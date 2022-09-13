import React, { useState } from "react";
import "./App.css";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript - Marijn Haverbeke", rating: "4/5" },
    { name: "You Don't Know JS - Kyle Simpson", rating: "3.5/5" },
  ],

  fiction: [
    {
      name: "Da Vinci Code - Dan Brown",
      rating: "5/5",
    },
    {
      name: "Harry Potter Series - J.K. Rowling",
      rating: "4.5/5",
    },
  ],

  selfhelp: [
    {
      name: "Atomic Habits - James Clear",
      rating: "4.5/5",
    },
    {
      name: "The Alchemist - Paulo Coelho",
      rating: "4/5",
    },
  ],
};

function App() {
  const [selectedGenre, setGenre] = useState("selfhelp");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚 bookipediaaaaa</h1>
      <p>Checkout my favorite books! Select a genre to get started</p>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li>
              <div>{book.name}</div>
              <br></br>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
