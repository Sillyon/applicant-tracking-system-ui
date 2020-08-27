import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListApplicantComponent from './components/ListApplicantComponent';
import CreateApplicantComponent from './components/CreateApplicantComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateApplicantComponent from './components/UpdateApplicantComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListApplicantComponent}></Route>
            <Route path="/applicants" component={ListApplicantComponent}></Route>
            <Route path="/add-applicant/:id" component={CreateApplicantComponent}></Route>
            {/* <Route path="/update-applicant/:id" component={UpdateApplicantComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
