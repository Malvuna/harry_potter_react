import { data } from "../card/characters.js";
import { Card } from "../card/card.jsx";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import like from "../card/like.svg";
import { Header } from "../header/header";
import { Filters } from "../filters/filters";

export function Main({ name, school, textValue, onSearch, onSearchSelect }) {
  const fuse = new Fuse(data, {
    keys: ["name", "actor", "house"],
    threshold: 0.2,
  });

  const filterName = name ? fuse.search(name).map((elem) => elem.item) : data;

  const filterSchool = filterName.filter((elem) => elem.house.includes(school));
  
  return (
    <main className="main">
      <Header />
      <Filters
        name={textValue}
        onNameChange={onSearch}
        onSchoolChange={onSearchSelect}
      />
      <div className="hr"></div>
      <button className="buttonShowLiked">
        <img className="imgButtom" src={like} />
        <Link to="/favorite"> Show Liked </Link>
      </button>
      <div className="box">
        {filterSchool.map((elem) => (
          <Card
            image={elem.image}
            name={elem.name}
            actor={elem.actor}
            gender={elem.gender}
            house={elem.house}
            wand={elem.wand}
            alive={elem.alive}
            key={elem.name}
          />
        ))}
      </div>
    </main>
  );
}
