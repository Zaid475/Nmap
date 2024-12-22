import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Searchedmoviepage from './components/Searchedmoviepage';
import Navbar from './components/Navbar';
import Topratedpage from './components/Topratedpage';
import Upcomingpage from './components/Upcomingmoviepage';
import Singlemoviedetailpage from './components/Singlemoviedetailpage';
import Searchedsinglemoviedetailpage from './components/Searchedsinglemoviedetailpage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/toprated" element={<Topratedpage/>}></Route>
        <Route path="/upcoming" element={<Upcomingpage/>}></Route>
        <Route path="/singlemovie/:movieid" element={<Singlemoviedetailpage/>}></Route>
        <Route path="/searchedmoviepage/:movie_name" element={<Searchedmoviepage/>}></Route>
        <Route path="/searchedsinglemoviedetailpage/:movieid" element={<Searchedsinglemoviedetailpage/>}></Route>



      </Routes>
      
      
    </div>
  );
}

export default App;
