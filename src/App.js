import React, { useState } from 'react';
import logo from './zenithLogo.png';
import './App.css';
import Modal from './Modal/Modal'
import Aux from './Auxilary/Auxilary'
import PrizeResult from './PrizeResult/PrizeResult';
import TextLoop from "react-text-loop";

const app = (props) => {
  const drawItems = [
      'Prize 1',
      'Prize 2',
      'Prize 3',
      'GRAND PRIZE'
    ]
  
  const [drawnState, setDrawnState] = useState({
    drawn: false
  })

  const [itemDrawnState, setItemDrawnState] = useState({
    itemDrawn: 'Click to draw'
  })

  const drawnHandler = () => {
    setDrawnState({
      drawn: true
    })
    drawItemHandler()
    console.log(drawnState)
  }

  const closeModalHandler = () => {
    setDrawnState({
      drawn: false
    })
  }

  const drawItemHandler = () => {
    let ranNum = Math.floor(Math.random()*100)
    console.log(ranNum);
    if (ranNum <= 50) {
      return setItemDrawnState({
        itemDrawn: drawItems[0]
      })
    } else if (ranNum > 50 && ranNum <= 80 )  {
      return setItemDrawnState({
        itemDrawn: drawItems[1]
      })
    } else {
      return setItemDrawnState({
        itemDrawn: drawItems[2]
      })
    }
  }



  return (
    <Aux>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Zenith Lucky Draw</h1>
        </header>
      </div>
      <Modal show={drawnState.drawn} modalClosed={closeModalHandler}>
        <PrizeResult prize = {itemDrawnState.itemDrawn}/>
      </Modal>
      <div style={{position: 'fixed', left: '45%',
                top: '32%' }}>
        <h1>
          <TextLoop children={drawItems} interval={100}/>
        </h1>
      </div>   
      <div style={{position: 'fixed', left: '48%',
                top: '44%'}}>
        <button onClick = {drawnHandler} >Draw!</button>
      </div>
    </Aux>
  );
}


export default app;
