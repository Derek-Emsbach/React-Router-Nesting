import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((el) => (
          <span key={el.id} style={{ margin: "5px" }}>
            <NavLink to={`/movies/${el.id}`}>{el.title}</NavLink>
          </span>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
