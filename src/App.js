import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainCart from './Components/MainCart';
import AddtoList from './Components/AddtoList';
import { GlobalState } from './Context/GlobalState';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
      <GlobalState>
        <div className="container-fluid">
          <div className="row">
            <Header />
            <Routes>
              <Route path="/" element={<MainCart />} />
              <Route path="/addtolist" element={<AddtoList />} />

            </Routes>
          </div>
        </div>
      </GlobalState>
    </>
  );
}

export default App;

