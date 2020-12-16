import { Component } from 'react';
import React from 'react';
import './App.css'
import {Switch, Route, Link} from 'react-router-dom';
import Exercitiul_1 from './Components/Exercitiul_1/Exercitiul_1';
import Exercitiul_2 from './Components/Exercitiul_2/Exercitiul_2';
import Exercitiul_3 from './Components/Exercitiul_3/Exercitiul_3';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  //Pentru a putea vizualiza exercitiul 3 comentati divul app si decomentati exercitiul 3
  render(){
    return(<React.Fragment>
      <div className='app'>
        <div className="appMenu">
          <Link to={'/exercitiul_1'} className="link">Exercitiul_1</Link>
          <Link to={'/exercitiul_2'} className="link">Exercitiul_2</Link>
        </div>
        <Switch>
          <Route exact path='/exercitiul_1' component={Exercitiul_1}></Route>
          <Route exact path='/exercitiul_2' component={Exercitiul_2}></Route>
        </Switch>
      </div>
      
      {/* <Exercitiul_3></Exercitiul_3> */}
      </React.Fragment>)
  }
}

export default App;
