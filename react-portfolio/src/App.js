import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return(
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;