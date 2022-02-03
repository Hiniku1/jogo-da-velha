import React, { Component } from 'react';
import '/home/hiniku/JS-Things/jogo/src/stylesheet.css';
import update from 'react-addons-update';

class Squares extends Component {
  state = {
    turns: 0,
    turnX: true,
    turnO: false,
    square1: 'none.jpg',
    square2: 'none.jpg',
    square3: 'none.jpg',
    square4: 'none.jpg',
    square5: 'none.jpg',
    square6: 'none.jpg',
    square7: 'none.jpg',
    square8: 'none.jpg',
    square9: 'none.jpg'
  };

  turnTurner = (id) => {
    //Isso muda a imagem para X ou O dependendo do turno
    while (this.state.turns != 9) {
      this.setState({turns: this.state.turns += 1})
      if (this.state.turnX == true && this.state.turnO == false) {
        this.setState({turnX: this.state.turnX = false})
        this.setState({turnO: this.state.turnO = true})
        switch (id) {
          case '1':
            return this.setState({
              square1: this.state.square1 = 'X.png'
            });

          case '2':
            return this.setState({
              square2: this.state.square2 = 'X.png'
            });

          case '3':
            return this.setState({
              square3: this.state.square3 = 'X.png'
            });

          case '4':
            return this.setState({
              square4: this.state.square4 = 'X.png'
            });

          case '5':
            return this.setState({
              square5: this.state.square5 = 'X.png'
            });

          case '6':
            return this.setState({
              square6: this.state.square6 = 'X.png'
            });

          case '7':
            return this.setState({
              square7: this.state.square7 = 'X.png'
            });

          case '8':
            return this.setState({
              square8: this.state.square8 = 'X.png'
            });

          case '9':
            return this.setState({
              square9: this.state.square9 = 'X.png'
            });
          default:
            return null;
        }
      } else if (this.state.turnO == true && this.state.turnX == false)  {
        this.setState({turnO: this.state.turnO = false})
        this.setState({turnX: this.state.turnX = true})
        switch (id) {
          case '1':
            return this.setState({
              square1: this.state.square1 = 'O.png'
            });

          case '2':
            return this.setState({
              square2: this.state.square2 = 'O.png'
            });

          case '3':
            return this.setState({
              square3: this.state.square3 = 'O.png'
            });

          case '4':
            return this.setState({
              square4: this.state.square4 = 'O.png'
            });

          case '5':
            return this.setState({
              square5: this.state.square5 = 'O.png'
            });

          case '6':
            return this.setState({
              square6: this.state.square6 = 'O.png'
            });

          case '7':
            return this.setState({
              square7: this.state.square7 = 'O.png'
            });

          case '8':
            return this.setState({
              square8: this.state.square8 = 'O.png'
            });

          case '9':
            return this.setState({
              square9: this.state.square9 = 'O.png'
            });
          default:
            return null;
        }
      };
  }
}
  gameLogic = () => {
    //Isso vê se o X venceu ou não, eu fiz desse jeito feio msm pq eu n sei outro jeito sry
    //Horizontal
    if (this.state.square1 == 'X.png' && this.state.square2 == 'X.png' && this.state.square3 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square4 == 'X.png' && this.state.square5 == 'X.png' && this.state.square6 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square7 == 'X.png' && this.state.square8 == 'X.png' && this.state.square9 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    //Vertical
    else if (this.state.square1 == 'X.png' && this.state.square4 == 'X.png' && this.state.square7 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square2 == 'X.png' && this.state.square5 == 'X.png' && this.state.square8 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square3 == 'X.png' && this.state.square6 == 'X.png' && this.state.square9 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    //Diagonal
    else if (this.state.square1 == 'X.png' && this.state.square5 == 'X.png' && this.state.square9 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square3 == 'X.png' && this.state.square5 == 'X.png' && this.state.square7 == 'X.png') {
      console.log("X Venceu")
      this.setState({turns: this.state.turns = 9})
    }

    //Isso vê se o O venceu ou não
    //Horizontal
    if (this.state.square1 == 'O.png' && this.state.square2 == 'O.png' && this.state.square3 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square4 == 'O.png' && this.state.square5 == 'O.png' && this.state.square6 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square7 == 'O.png' && this.state.square8 == 'O.png' && this.state.square9 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    //Vertical
    else if (this.state.square1 == 'O.png' && this.state.square4 == 'O.png' && this.state.square7 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square2 == 'O.png' && this.state.square5 == 'O.png' && this.state.square8 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square3 == 'O.png' && this.state.square6 == 'O.png' && this.state.square9 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    //Diagonal
    else if (this.state.square1 == 'O.png' && this.state.square5 == 'O.png' && this.state.square9 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
    else if (this.state.square3 == 'O.png' && this.state.square5 == 'O.png' && this.state.square7 == 'O.png') {
      console.log("O Venceu")
      this.setState({turns: this.state.turns = 9})
    }
  }

  render ()
  {
    return (
      <ul id='inline'>
        <li>
          <div onClick={() => {this.turnTurner('1'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square1)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('2'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square2)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('3'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square3)} width='120' lenght='120' /></div>
        </li>
        <br></br>
        <li>
          <div onClick={() => {this.turnTurner('4'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square4)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('5'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square5)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('6'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square6)} width='120' lenght='120' /></div>
        </li>
        <br></br>
        <li>
          <div onClick={() => {this.turnTurner('7'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square7)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('8'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square8)} width='120' lenght='120' /></div>
          <div onClick={() => {this.turnTurner('9'); this.gameLogic()}} className='square'><img src={require('/home/hiniku/JS-Things/jogo/src/images/' + this.state.square9)} width='120' lenght='120' /></div>
        </li>
      </ul>
    );
  }
}

export default Squares;
