import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PlayersContainer from './components/PlayersContainer';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <PlayersContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
