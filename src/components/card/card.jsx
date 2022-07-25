import { useState } from "react";

export function Card({ image, name, actor, gender, house, wand, alive }) {
  function addLike() {
    localStorage.setItem(name, "like");
  }

  function deleteLike() {
    localStorage.removeItem(name);
  }

  function searchLike() {
    if (localStorage.getItem(name) === "like") {
      console.log(localStorage.getItem(name));
      deleteLike();
    } else {
      addLike();
    }
  }

  const [isLike, setIsLike] = useState(true);

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

  let empty = (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9998 4.12207L10.9243 3.01657C8.39984 0.421573 3.77084 1.31707 2.09984 4.57957C1.31534 6.11407 1.13834 8.32957 2.57084 11.1571C3.95084 13.8796 6.82184 17.1406 11.9998 20.6926C17.1778 17.1406 20.0473 13.8796 21.4288 11.1571C22.8613 8.32807 22.6858 6.11407 21.8998 4.57957C20.2288 1.31707 15.5998 0.420073 13.0753 3.01507L11.9998 4.12207ZM11.9998 22.5001C-10.9997 7.30207 4.91834 -4.55993 11.7358 1.71457C11.8258 1.79707 11.9143 1.88257 11.9998 1.97107C12.0845 1.88265 12.1725 1.79759 12.2638 1.71607C19.0798 -4.56293 34.9993 7.30057 11.9998 22.5001Z"
        fill="#DC3545"
      />
    </svg>
  );

  return (
    <div className="card">
      <div className="card_img">
        <img className="card_foto" src={image} />{" "}
      </div>
      <p className="name">{name}</p>
      <p className="description">{actor}</p>
      <p className="description">Gender: {gender}</p>
      <p className="description">House: {house}</p>
      <p className="description">Wand core: {wand.core} </p>
      <p className="description">Alive: {alive == true ? "yes" : "no"} </p>
      <button className="buttonLike" onClick={() => {setIsLike(!isLike); searchLike()}}>
        {isLike ? empty : like}
      </button>
    </div>
  );
}
