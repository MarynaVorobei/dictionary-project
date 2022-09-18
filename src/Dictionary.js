import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit} className="d-flex justify-content-around">
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Search for a word"
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
      </section>
      <Results results={results} />
    </div>
  );
  } else {
    load();
    return "Loading...";
  }
}
