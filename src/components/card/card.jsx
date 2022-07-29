import likese from "./likese.svg";
import empty from "./empty.svg";

export function Card({
  image,
  name,
  actor,
  gender,
  house,
  wand,
  alive,
  liked,
  onLike,
  onDisLike,
}) {
  return (
    <div className="card">
      <div className="card_img">
        <img className="card_foto" src={process.env.PUBLIC_URL + `/images/${image}`} />
      </div>
      <p className="name">{name}</p>
      <p className="description">{actor}</p>
      <p className="description">Gender: {gender}</p>
      <p className="description">House: {house}</p>
      <p className="description">Wand core: {wand.core} </p>
      <p className="description">Alive: {alive == true ? "yes" : "no"} </p>
      <div className="divLike"> <button className="buttonLike" onClick={() => (liked ? onDisLike(name) : onLike(name))}>
        <img src={liked ? likese : empty}></img>
      </button>
      </div>
    </div>
  );
}
