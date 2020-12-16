import {Component} from 'react'
import './firstContainer.css'
import {VscSettingsGear} from 'react-icons/vsc'
import {ImMobile} from 'react-icons/im'
import {FaRegNewspaper} from 'react-icons/fa'
import {MdKeyboardArrowRight} from 'react-icons/md'

class FirstContainer extends Component{
    constructor(props){
      super(props);
      this.state={
        data:[
          {title:'EASY TO USE EQUIPMENT', 
           info:'Pellentesque dignissim mi non ipsum vulputatultrices justo euismod [...]', 
           icon:<VscSettingsGear className='subjectIcon'></VscSettingsGear>},
          {title:"A SYSTEM YOU'LL ACTUALY USE", 
           info:'Suspendisse vulputate porta mi, non interdum metus tempus quis [...]',
           icon:<ImMobile className='subjectIcon'></ImMobile>},
          {title:'SAVE UP TO $20 A MONTH ON YOUR ENERGY BILL', 
           info:'Fusce et orci leo. Nulla condimentum et magna sit amet rhoncus [...]',
           icon:<FaRegNewspaper className='subjectIcon'></FaRegNewspaper>}
        ]
      };
    }
     
    render(){
      return(
        <div className='first-container'>
          <div className='subject'>
          {this.state.data.map((value,index)=>{
            let dif = index === 2 ? '' : 'First';
            return(  
              <div key={`${index}0`} className='detailSubject'>
                <div key={`${index}1`} className='containerIcon'>{value.icon}</div>
                <h2 key={`${index}2`} className={`titleSubject${dif}`}>{value.title}</h2>
                <p key={`${index}3`} className='infoSubject'>{value.info}</p>
                <div key={`${index}5`} className='btnSubject'>
                  <div>READ MORE</div>
                  <MdKeyboardArrowRight className='btnIcon'></MdKeyboardArrowRight>
                </div>
              </div>
          )
          })}
          </div>
          <div className='about'>
            <h2><span>About Us</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. 
               Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. 
               In at libero sed nunc venenatis imperdiet sed ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
               Lorem ipsum dolor sit amet, consectetur.</p>  
          </div>
    </div>
      )
    }
  }
  
  export default FirstContainer;