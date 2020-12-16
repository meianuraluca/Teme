import {Component} from 'react'
import React from 'react';
import './menu.css';
import image1 from '../../Image/image1.png';
import logo from '../../Image/logo.png';
import {ImPhone} from 'react-icons/im';
import {MdKeyboardArrowDown} from 'react-icons/md'

class Menu extends Component{
    constructor(props){
      super(props);
      this.state={
          data:['HOME','ABOUT US','V3 CARES','PRODUCTS','SERVICES','CONTACT']
      };
    }
     
    render(){
      return(
        <div className='menu'>
              <img src={image1} className='namePage' alt='title' ></img>
              <div className='containerMenu'>
                  <div className='semiOvalContainer'>
                    <div className='phone'>
                      <ImPhone  className='icon'></ImPhone><div>916.543.1543</div></div>
                    <div className='quote'><div>GET A FREE QUOTE</div> <MdKeyboardArrowDown className='icon'></MdKeyboardArrowDown> </div>
                  </div>
                  <div className='optionsMenu'> 
                    {this.state.data.map((value, index)=>{
                        if(index === this.state.data.length-1){
                            return <p className='option' key={index}>{value}</p>
                        }
                        return <p className='option' key={index}>{value}
                            <div className='rectangle'></div>
                        </p>
                    })}
                  </div>
              </div>
              <img className='miniLogo' src={logo} alt='logo'></img>
              </div>)
    }
  }
  
  export default Menu;