import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Section1 from './Section1';
import Section2 from './Section2';
import LogicForm from './components/LogicForm';
import ReportIssue from './components/ReportIssues';

function App(){
  return(
    <Router basename='/'>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/form" element={<LogicForm />} />
          <Route path="/report-issue" element={<ReportIssue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
