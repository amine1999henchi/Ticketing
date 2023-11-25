import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Dao from "./components/Dao";
import TennisCard from "./components/TennisCard";
import Categories from "./pages/Categories"
import FootballMatches from './pages/FootballMatches'
import Getyourticket from "./components/Getyourticket";
import Ticketpage from './pages/Ticketpage'
import { useWallet } from "./components/provider-js/use-wallet";
import Places from './pages/Places'
import Test from './components/TicketCard'
import MatchTickets from "./pages/MatchTickets";
function App() {
  const { loading, error } = useWallet()


 
  
    return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Header />} />
        <Route path="/DAO" element={<Dao/>} />
        <Route path='/Matches' element={<Categories/>} />
        <Route path='/FootballMatches' element={<FootballMatches/>} />
        <Route  path='/ticket' element={<Ticketpage/>} />
        <Route  path='/test' element={<Test/>} />
        <Route  path='/matchTickets/:matchId' element={<MatchTickets/>} />
      </Routes>
   
    </div>
  );
}

export default App;
