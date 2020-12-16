import {Component} from 'react'
import './ex3.css'
import Menu from '../Menu/menu.js'
import background from '../../Image/background.png'
import FirstContainer from '../FirstContainer/firstContainer';
import SecondContainer from '../SecondContainer/secondContainer';

class Exercitiul_3 extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }
     
    render(){
      return(
      <div className="page">
          <Menu></Menu>
          <div className='containerImage'>
              <img alt='background' src={background}></img>
              <div className='message'>
                  <h2 className='title'>WE ARE YOUR NEIGHBORS</h2>
                  <p className='info'>Fusce et orci leo. Nulla condimentum et magna sit amet rhoncus. Pellertesque dignissim mi non ipsum Suspendisse volputate porta mi, non interdum metus tempus quis. Donec grav da, tortor aliquet consequat sagittis[...]</p>
                  <div className='btn'>GET A FREE QUOTE</div>
              </div>
          </div>
          <FirstContainer></FirstContainer>
          <SecondContainer></SecondContainer>
      </div>)
    }
  }
  
  export default Exercitiul_3;