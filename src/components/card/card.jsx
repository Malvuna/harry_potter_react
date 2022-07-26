import { useState } from "react";
import like from "./like.svg";
import empty from "./empty.svg";

export function Card({ image, name, actor, gender, house, wand, alive }) {
  function searchLike() {
    if (localStorage.getItem(name) === "like") {
      localStorage.removeItem(name);
    } else {
      localStorage.setItem(name, "like");
    }
  }

  const savedLike = localStorage.getItem(name) === "like";

  const [isLike, setIsLike] = useState(savedLike);

  return (
    <div className="card">
      <div className="card_img">
        <img className="card_foto" src={image} />
      </div>
      <p className="name">{name}</p>
      <p className="description">{actor}</p>
      <p className="description">Gender: {gender}</p>
      <p className="description">House: {house}</p>
      <p className="description">Wand core: {wand.core} </p>
      <p className="description">Alive: {alive == true ? "yes" : "no"} </p>
      <button
        className="buttonLike"
        onClick={() => {
          setIsLike(!isLike);
          searchLike();
        }}>
        <img src={isLike ? like : empty}></img>
      </button>
    </div>
  );
}
