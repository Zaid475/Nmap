import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/searchedmoviepage.css";

const Searchedmoviepage = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [state, updatedstate] = useState([]);
  const { movie_name } = useParams();
  const path=useNavigate();

  useEffect(() => {
    fetchmovie();
  }, [movie_name]);

  async function fetchmovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
      );
      if (response.data.results) {
        updatedstate(response.data.results);
      } else {
        console.log("No response");
      }
    } catch (error) {
      console.log("Error occurred");
    }
  }

  return (
    <div className="searched-movie-container">
      {state.map((item) => (
        <div onClick={()=>{path(`/searchedsinglemoviedetailpage/${item.id}`) }} className="movie-card" key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <div className="movie-details">
            <h6 className="movie-title">{item.title}</h6>
            <p className="movie-info">Language: {item.original_language}</p>
            <p className="movie-info">Rating: {item.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchedmoviepage;
