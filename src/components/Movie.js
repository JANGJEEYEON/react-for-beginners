import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <MovieCard>
      <img src={coverImg} alt={title} />
      <h2>
        <StyledLink to={`/movie/${id}`}>{title}</StyledLink>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <GenreList>
        {genres.map((g) => (
          <GenreItem key={g}>{g}</GenreItem>
        ))}
      </GenreList>
    </MovieCard>
  );
}

const MovieCard = styled.div`
 background: white;
 border-radius: 10px;
 padding: 1.5rem;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

 img {
   width: 100%;
   border-radius: 8px;
   margin-bottom: 1rem;
 }

 h2 {
   margin: 1rem 0;
 }

 p {
   color: #2c3e50;
   line-height: 1.6;
   margin-bottom: 1rem;
 }
`;

const StyledLink = styled(Link)`
 color: #2c3e50;
 text-decoration: none;
 &:hover {
   color: #3498db;
 }
`;

const GenreList = styled.ul`
 list-style: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 gap: 0.5rem;
`;

const GenreItem = styled.li`
 background: #f0f2f5;
 padding: 0.3rem 0.8rem;
 border-radius: 15px;
 font-size: 0.9rem;
 color: #34495e;
`;

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;