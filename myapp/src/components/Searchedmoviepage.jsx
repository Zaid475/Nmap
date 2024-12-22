import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/searchedmoviepage.css";


const Searchedmoviepage = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const imgbase = "https://image.tmdb.org/t/p/w500";
  const [state, updatedstate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0); 
  const { movie_name } = useParams();
  const path = useNavigate();

  useEffect(() => {
    fetchmovie();
  }, [movie_name, currentPage]); 

  async function fetchmovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=${currentPage}`
      );
      if (response.data.results) {
        updatedstate(response.data.results);
        setTotalPages(response.data.total_pages); 
      } else {
        console.log("No response");
      }
    } catch (error) {
      console.log("Error occurred");
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="searched-movie-container">
        {state.map((item) => (
          <div
            onClick={() => {
              path(`/searchedsinglemoviedetailpage/${item.id}`);
            }}
            className="movie-card"
            key={item.id}
          >
            <img
              src={
                item.poster_path
                  ? `${imgbase}${item.poster_path}`
                  : "https://via.placeholder.com/150"
              }
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

      
      <div className="pagination-controls">
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Searchedmoviepage;
