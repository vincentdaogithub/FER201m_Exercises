import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Players from './components/Players';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Players />
      </main>

      <Footer />
    </div>
  );
}

export default App;
