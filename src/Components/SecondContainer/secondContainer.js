import {Component} from 'react'
import './secondContainer.css'
import alice from '../../Image/alice.png'
import john from '../../Image/john.png'
import video from '../../Image/video.mp4'
import {MdKeyboardArrowRight} from 'react-icons/md'


class SecondContainer extends Component{
    constructor(props){
      super(props);
      this.state={
        data:[
            {message:'Vestibulum malesuada hendrerit odio, ut tristique magna pretium vel. Integer metus lecuts[...]',
             name:'Alice Knigh',
             typeUser: 'Client',
             rating:'★★★☆☆',
             photo:alice},
            {message:'Nullam ut facilisis justo. Ut tempus porta urna a accumsan. Praesent sollicitudin auque nib [...]',
             name:'John Smith',
             typeUser:'Client',
             rating:'★★★★☆',
             photo:john}

        ]
      };
    }
     
    render(){
      return(
        <div className='second-container'>
            <div className='container-title'></div>
            <div className='containder-data'>
                <div className='left'>
                    <h1>OUR CLIENT SAYS</h1>
                    <div className='reviews'>
                        {this.state.data.map((review,index)=>{
                            return(<div key={index} className='review'>
                                <span key={`${index}0`} className='reviewMessage'><blockquote></blockquote>{review.message}<blockquote className='last'></blockquote></span>
                                <div key={`${index}1`} className='reviewInfo'>
                                    <img key='0' src={review.photo} className='profile-photo' alt='profilePht'></img>
                                    <div key='1' className='clientName'>{`${review.name} - `}</div>
                                    <div key='2' className='typeClient'>{review.typeUser}</div>
                                    <div key='3' className='rating'>{review.rating}</div>
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className='viewAll'>
                        <p>View All</p>
                        <div><MdKeyboardArrowRight></MdKeyboardArrowRight></div>
                    </div>
                </div>
                <div className='right'>
                    <video controls>
                        <source src={video} type='video/mp4'></source>
                    </video>
                    <h1>Watch Our Video</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
                       Lorem ipsum dolor sit amet, consectetur.[...]</p>
                </div>
            </div>   
    </div>
      )
    }
  }
  
  export default SecondContainer;