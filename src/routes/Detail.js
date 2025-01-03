import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MainSection>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt="poster" />
          <p>
            🎬 Title: {movie.title}, {movie.year}
          </p>
          <p>🏆 Rate: {movie.rating}</p>
          <p>⏳ Runtime: {movie.runtime}</p>
        </div>
      )}
    </MainSection>
  );
}

const MainSection = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 300px;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  p {
    font-size: 1.1rem;
    margin: 0.8rem 0;
    color: #2c3e50;
    line-height: 1.6;
  }

  h1 {
    color: #34495e;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Detail;
