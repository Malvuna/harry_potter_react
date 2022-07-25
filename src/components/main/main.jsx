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

  let like = (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 5.34267 -4.87192 11.9997 1.97108Z"
        fill="#DC3545"
      />
    </svg>
  );

  return (
    
    <main className="main">
      <div className="hr"></div>
      <button className="buttonShowLiked">{like}Show Liked</button>
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
