import { data } from "../card/characters.js";
import { Card } from "../card/card.jsx";
import Fuse from "fuse.js";
import like from "../card/like.svg";

export function Main({ name, school }) {
  const fuse = new Fuse(data, {
    keys: ["name", "actor", "house"],
    threshold: 0.2,
  });

  const filterName = name ? fuse.search(name).map((elem) => elem.item) : data;

  const filterSchool = filterName.filter((elem) => elem.house.includes(school));

  const filterFavoritArr = data.filter(
    (elem) => localStorage.getItem(elem.name) === "like",
  );
  console.log(filterFavoritArr);

  return (
    <main className="main">
      <div className="hr"></div>
      <button className="buttonShowLiked">
        {" "}
        <img className="imgButtom" src={like} /> Show Liked
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
