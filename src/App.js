import React from "react";
import { Favorite } from "../src/components/pages/favorite/favorite.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Main } from "./components/main/main.jsx";

export function App() {
  const [textValue, setTextValue] = useState("");
  function onSearch({ currentTarget }) {
    setTextValue(currentTarget.value);
  }

  const [selectValue, setSelectValue] = useState("");
  function onSearchSelect({ currentTarget }) {
    setSelectValue(currentTarget.value);
  }

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  name={textValue}
                  school={selectValue}
                  onSearch={onSearch}
                  onSearchSelect={onSearchSelect}
                />
              }
            />
            <Route path="favorite" element={<Favorite />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
