import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Homepage.css";
import { useNavigate } from "react-router-dom";

const Topratedpage = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const imgbase = "https://image.tmdb.org/t/p/w500";
  const [state, updatedstate] = useState([]);
  const path=useNavigate()

  useEffect(() => {
    value();
  }, []);

  async function value() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      );
      if (response.data.results) {
        console.log(response.data.results);
        updatedstate(response.data.results);
      } else {
        console.log("fetching failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      
      <div className="movie-container">
        {state.map((item) => (
          <div onClick={()=>{
            path(`/singlemovie/${item.id}`)

          }}   key={item.id} className="movie-card">
            <img src={`${imgbase}${item.poster_path}`} alt={item.title} />
            <h6>{item.title}</h6>
            <h6>Language: {item.original_language}</h6>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Topratedpage;
