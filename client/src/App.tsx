import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";


class App extends Component {
  render() {
    return (
    <div className="App">
      <nav className = "navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className = "navbar-brand">Alan</a>
        <div className = "navbar-nav mr-auto">
          <li className = 'nav-item'>
          <Link to={"/tutorials"} className = "nav-link">
            Tutorials
          </Link>
          </li>
          <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          

        </div>
      </nav>

      <div className = "container mt-3">
        <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>)
  }
}



export default App;