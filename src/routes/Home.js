import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MainContainer>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieGrid>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </MovieGrid>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;

  h1 {
    text-align: center;
    color: #34495e;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export default Home;
