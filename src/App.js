
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Row from './Components/Row/Row';

import {originals,action,comedy,adventure,animation,trending,drama,crime,family,fantasy,history,horror,music,mystery,
  romance,sciencefiction,tvmovies} from './Urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row url={originals} title="Netflix Originals" / >
      <Row url={trending} title="Trending" isSmall />
      <Row url={adventure} title="Adventure" isSmall />
      <Row url={animation} title="Animation" isSmall />
      <Row url={comedy} title="Comedy" isSmall />
      <Row url={action} title="Action" isSmall />
      <Row url={crime} title="Crime" isSmall />
      <Row url={drama} title="Drama" isSmall />
      <Row url={family} title="Family" isSmall />
      <Row url={fantasy} title="Fantasy" isSmall />
      <Row url={history} title="History" isSmall />
      <Row url={horror} title="Horror" isSmall />
      <Row url={music} title="Music" isSmall />
        {/* <Row url={documentary} title="Documentary" isSmall /> */}
        <Row url={mystery} title="Fantasy" isSmall />
      <Row url={romance} title="History" isSmall />
      <Row url={sciencefiction} title="Horror" isSmall />
      <Row url={tvmovies} title="Music" isSmall />

        <Footer/>
    </div>
  );
}

export default App;
