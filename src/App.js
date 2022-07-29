import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Fuse from "fuse.js";

import { data } from "../src/components/card/characters.js";

import { Main } from "./components/main/main.jsx";
import { Favorite } from "../src/components/pages/favorite/favorite.jsx";

const addLike = JSON.parse(localStorage.getItem("liked")) ?? [];

export function App() {
  const [likeName, setlikeName] = useState(addLike);
  localStorage.setItem("liked", JSON.stringify(likeName));

  const [textValue, setTextValue] = useState("");
  function onSearch({ currentTarget }) {
    setTextValue(currentTarget.value);
  }

  const [selectValue, setSelectValue] = useState("");
  function onSearchSelect({ currentTarget }) {
    setSelectValue(currentTarget.value);
  }

  function like(name) {
    const newlikeName = [...likeName];
    newlikeName.push(name);
    setlikeName(newlikeName);
  }

  function disLike(name) {
    const newlikeName = likeName.filter((element) => element !== name);
    setlikeName(newlikeName);
  }

  const fuse = new Fuse(data, {
    keys: ["name", "actor", "house"],
    threshold: 0.2,
  });

  const filterName = textValue
    ? fuse.search(textValue).map((elem) => elem.item)
    : data;

  const filterSchool = filterName.filter((elem) =>
    elem.house.includes(selectValue),
  );

  return (
      <React.StrictMode>
        <BrowserRouter basename="/harry_potter_react">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  filterSchool={filterSchool}
                  onSearch={onSearch}
                  onSearchSelect={onSearchSelect}
                  onLike={like}
                  onDisLike={disLike}
                  likeName={likeName}
                />
              }
            />
            <Route
              path="favorite"
              element={
                <Favorite
                  filterSchool={filterSchool}
                  onLike={like}
                  onDisLike={disLike}
                  likeName={likeName}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;

