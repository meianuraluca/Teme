import { Component } from 'react';
import './ex2.css'

class Exercitiul_2 extends Component{
  constructor(props){
    super(props);
    this.state={
      options:[
        {data:['Toate'], id:'select0',selectedIndex:0, selectedOption:'Toate'},
        {data:['Toate'], id:'select1',selectedIndex:0, selectedOption:'Toate'},
        {data:['Toate'], id:'select2',selectedIndex:0, selectedOption:'Toate'}
      ]
    };
  }
  componentDidMount(){
    fetch('https://radupintilie.dev.ascensys.ro/code_tests/testData.txt')
    .then(response => response.text())
    .then(data => data.replaceAll(',','\n').split('\n'))
    .then(arr => {
      let vec1=['Toate'];
      let vec2=['Toate'];
      let vec3=['Toate'];
      for(let i=0; i < arr.length; i+=3){
        vec1.push(arr[i]);
        vec2.push(arr[i+1])
        vec3.push(arr[i+2])
 
      }
      this.setState(prevState=>{
        let options = prevState.options;
        options[0].data = vec1;
        options[1].data = vec2;
        options[2].data = vec3;
        return {options}
      })
    })
  }
  changeOption=(event)=>{
    let index = event.target.id[event.target.id.length-1];
    this.setState(prevState => {
      let options =  prevState.options;
      options[index].selectedIndex = event.target.selectedIndex;
      options[index].selectedOption = event.target.value;                                
      return { options };                                
    })
  }

  filterData=(val,index)=>{
    let endPoz = []
    let firstPoz = []
    for(let i=0; i<3; i++){
      if(this.state.options[i].selectedOption === 'Toate'){
        firstPoz.push(0);
        endPoz.push(10);
      }
      else{
        endPoz.push(this.state.options[i].data.lastIndexOf(this.state.options[i].selectedOption))
        firstPoz.push(this.state.options[i].data.findIndex((val)=> val === this.state.options[i].selectedOption))
      }

    }
    let ok = true;
    for(let i=0; i<3; i++){
      if(index < firstPoz[i] || index > endPoz[i] ){
        ok = false;
      }
    }
    return ok
  }

  filterDataTable=(val,index)=>{
    if(val === 'Toate'){
      return false;
    }
    return this.filterData(val,index);
  }


  render(){
    let op =this.state.options
    return(<div>
      {this.state.options.map((option,index)=>{
        return <select className='options' defaultValue={option.selectedOption} key={index} id={option.id} onChange={this.changeOption}>
          {option.data.filter(this.filterData)
                      .filter((v,i)=>op[index].data.filter(this.filterData).indexOf(v)===i)
                      .map((val, ind)=>{ return <option value={val} key={ind}>{val}</option>
        })}
        </select>
      })}
      <div className="container">
        {this.state.options.map((option,index)=>{
          return <td className="celula" key={index}>
            {option.data.filter(this.filterDataTable).map((value,ind)=>{
              return <tr key={ind}>{value}</tr>
            })}
          </td>
        })}
      </div>
    </div>)
  }
}

export default Exercitiul_2;
