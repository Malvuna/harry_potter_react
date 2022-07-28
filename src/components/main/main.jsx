import { Link } from "react-router-dom";
import likese from "../card/likese.svg";

import { Header } from "../header/header";
import { Filters } from "../filters/filters";
import { Card } from "../card/card.jsx";

export function Main({
  filterSchool,
  onSearch,
  onSearchSelect,
  likeName,
  onLike,
  onDisLike,
}) {
  return (
    <main className="main">
      <Header />
      <Filters onSearch={onSearch} onSearchSelect={onSearchSelect} />
      <div className="hr"></div>

      <button className="buttonShowLiked">
        <img className="imgButtom" src={likese} />
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
            liked={likeName.includes(elem.name)}
            onLike={onLike}
            onDisLike={onDisLike}
          />
        ))}
      </div>
    </main>
  );
}
