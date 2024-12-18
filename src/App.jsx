import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Create from './Create';
import MainLayOut from './MainLayOut';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          {/* <Route path="edit/:id" element={<Update />} /> */}
          <Route path="edit/:id" element={<Update />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
