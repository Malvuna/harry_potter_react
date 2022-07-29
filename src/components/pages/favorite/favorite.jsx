import { Liked } from "../../header/liked.jsx";

import { Card } from "../../card/card.jsx";

export function Favorite({ filterSchool, likeName, onLike, onDisLike }) {
  const filterFavoritArr = filterSchool.filter((elem) =>
    likeName.includes(elem.name),
  );

  return (
    <>
      <Liked />
      <div className="hr"></div>
      <div className="box">
        {filterFavoritArr.map((elem) => (
          <Card
            image={process.env.PUBLIC_URL + `/images/${elem.image}`}
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
    </>
  );
}
