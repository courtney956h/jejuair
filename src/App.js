import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Join from './routes/Join';


const App = () => {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </HashRouter>
    </div>
  );
};

export default App;