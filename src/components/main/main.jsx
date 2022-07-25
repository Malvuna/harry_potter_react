import { data } from "../card/characters.js";
import { Card } from "../card/card.jsx";
import Fuse from "fuse.js";

export function Main({ name, school }) {
  const fuse = new Fuse(data, {
    keys: ["name", "actor", "house"],
    threshold: 0.0,
  });

  const filterName = name
    ? fuse.search(name).map((elem) => elem.item)
    : data;

  const filterSchool = filterName.filter((elem) =>
    elem.house.includes(school),
  );

  return (
    <main className="main">
      <div className="hr"></div>
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
