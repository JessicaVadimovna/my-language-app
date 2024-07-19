import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import AddWordForm from './components/AddWordForm/AddWordForm';
import WordTable from './components/WordTable/WordTable';
import ToggleTableButton from './components/ToggleTableButton/ToggleTableButton';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import './components/WordCard/WordCard.css';
import './components/WordCarousel/WordCarousel.css';
import WordProvider, { WordContext } from './contexts/WordContext';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

const Home = ({ isTableVisible, toggleTableVisibility }) => (
  <div>
    <AddWordForm />
    <ToggleTableButton isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />
    {isTableVisible && <WordTable />}
  </div>
);

const Game = () => {
  return (
    <div>
      <WordCarousel />
    </div>
  );
};

const App = () => {
  const [isTableVisible, setTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <WordProvider>
      <Router>
        <div className="App">
          <Menu />
          <main>
            <WordContext.Consumer>
              {({ error }) => error && <ErrorComponent message={error.message} />}
            </WordContext.Consumer>
            <Routes>
              <Route
                path="/"
                element={<Home isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />}
              />
              <Route path="/game" element={<Game />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WordProvider>
  );
};

export default App;









