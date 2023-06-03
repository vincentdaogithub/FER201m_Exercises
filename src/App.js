import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import PlayerDetail from './components/PlayerDetail';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<PlayerDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
