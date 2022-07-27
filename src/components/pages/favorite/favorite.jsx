import { data } from "../../card/characters.js";
import { Liked } from "../../header/liked.jsx";
import { Card } from "../../card/card.jsx";

export function Favorite() {

  
  const filterFavoritArr = data.filter(
    (elem) => localStorage.getItem(elem.name) === "like",
  );

  return (
    <>
      <Liked />
      <div className="hr"></div>
      <div className="box">
        {filterFavoritArr.map((elem) => (
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
    </>
  );
}
