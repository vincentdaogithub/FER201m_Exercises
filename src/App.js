import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
