import React from 'react'
import Header from './components/Header/Header'
import SectionWeAre from './components/SectionWeAre/SectionWeAre'
import SectionWeDo from './components/SectionWeDo/SectionWeDo'
import SectionOperate from './components/SectionOperate/SectionOperate'
import SectionCollaborative from './components/SectionCollaborative/SectionCollaborative'
import SectionClients from './components/SectionClients/SectionClients'
import SectionCooperative from './components/SectionCooperative/SectionCooperative'
import SectionMembers from './components/SectionMembers/SectionMembers'
import SectionFriends from './components/SectionFriends/SectionFriends'
import Services from './components/Services/Services'
import CasesInsights from './components/CasesInsights/CasesInsights'

import './App.css';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/casesInsights'>
            <CasesInsights />
          </Route>
          <Route path='/'>
            <SectionWeAre />
            <SectionWeDo />
            <SectionOperate />
            <SectionCollaborative />
            <SectionClients />
            <SectionCooperative />
            <SectionMembers />
            <SectionFriends />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
