import { useState } from "react";
import { Header } from "./components/header/header.jsx";
import { Filters } from "./components/filters/filters.jsx";
import { Main } from "./components/main/main.jsx";
import { Liked } from "./components/header/liked.jsx";
import data from "./components/card/characters.js";

function App() {
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
      <Liked />
      <div className="hr"></div>

      <Header />
      <Filters
        name={textValue}
        onNameChange={onSearch}
        onSchoolChange={onSearchSelect}
      />
      <Main name={textValue} school={selectValue} />
    </>
  );
}

export default App;
