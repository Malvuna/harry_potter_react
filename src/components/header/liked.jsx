import { Link } from "react-router-dom";

export function Liked() {
  return (
    <header>
      <div className="conteiner">
        <div className="back"> <Link to="/">← Back To All </Link></div>
        <h1 className="h1">Liked ones</h1>
        <h2 className="h2">
        Your favorite characters from the Harry Potter universe.
        </h2>
      </div>
    </header>
   
  );
}
