// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfoForm from './components/UserInfoForm';
import FamilyInfoFrom from './components/FamilyInfoFrom';
import NavBar from './components/NarBar';
import UserFamilyDetails from './components/UserFamilyDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<UserInfoForm/>} />
          <Route exact path="/userFamily" element={<UserFamilyDetails/>} />

          <Route path="/familyInfo" element={<FamilyInfoFrom/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
