import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="d-flex justify-content-around">
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleKeywordChange}
              className="form-control shadow-sm rounded"
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="🔎"
              className="btn btn-info w-100 shadow-sm rounded"
            />
          </div>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
