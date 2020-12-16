import {Component} from 'react'
import {random, floor} from 'mathjs'
import React from 'react'
import './ex1.css'

class Exercitiul_1 extends Component{
    constructor(props){
      super(props);
      this.state={
        board:[[0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0]],
        dificulty:20
      };
    }

    componentDidMount(){
      this.generateSudoku();
    }

    generateSudoku(){
      var auxBoard = this.state.board;
      this.completeDiagonal(auxBoard);
      this.completeTheRest(0,3,auxBoard);
      this.removeValues(auxBoard)
      this.setState({board:auxBoard})
    }

    checkValInBox(line,col,val,auxBoard){
      for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
          if(auxBoard[line+i][col+j] === val)  
            return false;
        }
      }

      return true;

    }


    completeDiagonal(auxBoard){
      for(let i=0; i<9; i+=3){
        let val;
        for(let j=0; j<3; j++){
          for(let l=0; l<3; l++){
            do{
              val = floor(random()*9+ 1);      
            }
            while(!this.checkValInBox(i,i,val,auxBoard))
            auxBoard[i+j][i+l] = val;
           
          }
        }
      }
    }

    checkRow=(i, val,auxBoard)=>{
      for(let j = 0; j<9; j++){
        if(auxBoard[i][j] === val)
          return false;
      }
      return true;
    }

    checkCollum=(j,val,auxBoard)=>{
      for(let i = 0; i<9; i++){
        if(auxBoard[i][j] === val)
          return false;
      }
      return true;
    }

    checkValue=(i,j,val,auxBoard)=>{
      let a = i-i%3;
      let b = j-j%3;
      let ok = this.checkRow(i,val,auxBoard) && this.checkCollum(j,val,auxBoard) && this.checkValInBox(a,b,val,auxBoard)
      return ok;
    }

    completeTheRest=(i,j,auxBoard)=>{
      if( j>= 9 && i<8){
        i=i+1;
        j=0;
      }

      if( i>= 9 && j>=9)
        return true;
      
      if(i < 3){
        if(j < 3)
            j = 3;
      }
      else 
        if( i < 6){
          if( j === floor(i/3)*3)
            j = j + 3;
        }
        else{
          if( j === 6)
          {
            i = i+1;
            j = 0;
            if(i >= 9)
              return true;
          }
        }
        for(let l=1; l <=9 ;l++){
          if(this.checkValue(i,j,l,auxBoard)){
            auxBoard[i][j]=l;
            if(this.completeTheRest(i,j+1, auxBoard))
              return true;
            auxBoard[i][j]=0;
          }
        }
     return false; 
    }

    removeValues=(auxBoard)=>{
      let count = 20;
      while(count !== 0){
        let cell = floor(random(9*9));
        let i = floor(cell/9);
        let j = cell%9;
        if( j !== 0)
          j = j - 1;
        if(auxBoard[i][j] !==0){
          count--;
          auxBoard[i][j]=0;
        }
      }
    }

    render(){
      return(<React.Fragment>
        {this.state.board.map((line, poz)=>{
          return(<tr key={poz}>
            {line.map((value, index)=>{
              return value === 0 ? <td key={index}></td> : <td key={index}>{value}</td>
            })}
          </tr>)
        })}
 
 </React.Fragment>)
    }
  }
  
  export default Exercitiul_1;