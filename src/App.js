import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "./components/atoms/FontAwesome"
import "./assets/scss/style.scss";
import About from "./pages/About";
import Project from "pages/Project";
import Design from "pages/Design";
import {Provider} from 'react-redux'
import {store} from 'config/redux/store'
import ProjectDetail from "pages/ProjectDetail";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <main role="main">
      <Provider store={store}>
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Project}/>
            <Route exact path="/design" component={Design}/>
            <Route exact path="/projectDetail/:productId" component={ProjectDetail}/>
          </Switch>
        </Router>
        <ToastContainer></ToastContainer>
      </Provider>
      </main>
    </div>
  );
}

export default App;
