import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListApplicantComponent from './components/ListApplicantComponent';
import CreateOrUpdateApplicantComponent from './components/CreateOrUpdateApplicantComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewApplicantComponent from './components/ViewApplicantComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListApplicantComponent}></Route>
            <Route path="/applicants" component={ListApplicantComponent}></Route>
            <Route path="/save-applicant/:id" component={CreateOrUpdateApplicantComponent}></Route>
            <Route path="/view-applicant/:id" component={ViewApplicantComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
