import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Searchedmoviepage from './components/Searchedmoviepage';
import Navbar from './components/Navbar';
import Topratedpage from './components/Topratedpage';
import Upcomingpage from './components/Upcomingmoviepage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/search" element={<Searchedmoviepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/toprated" element={<Topratedpage/>}></Route>
        <Route path="/upcoming" element={<Upcomingpage/>}></Route>



      </Routes>
      
      
    </div>
  );
}

export default App;
