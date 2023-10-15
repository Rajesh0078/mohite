import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllNavigations from "./components/AllNavigations"
import Footer from './components/Footer/Footer';
import { createContext, useState } from 'react';
export const store = createContext();

function App() {

  const [value, setValue] = useState("")

  const context_value = {
    value, setValue
  }
  return (
    <>
      <store.Provider value={context_value}>
        <BrowserRouter>
          <div className='hero'>
            <Header />
            <AllNavigations />
            <Footer />
          </div>
        </BrowserRouter>
      </store.Provider>
    </>
  );
}

export default App;
