
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import {turns,WinnerCombinate} from './constants.js' 
import { ModalWinner } from './components/ModalWinner.jsx'


function App() {
  
  const board= Array(9).fill(null)
  const [tablero,setTablero] = useState(board)
  const [turno, setTurno] = useState(turns.X)
  const[ganador,setGanador]=useState(null)


  const checkWinner=(boardToCheck)=>{

    //for all winner combinate
    for( const combinate of WinnerCombinate){
      const[a,b,c] = combinate
      if(boardToCheck[a] && boardToCheck[a]=== boardToCheck[b] && boardToCheck[b]===boardToCheck[c])
        return boardToCheck[a]
    }

    //no winner
    return null

  }

  const checkEndGame=(newTablero)=>{
    return newTablero.every((square)=>square !== null)


  }

  const updatetablero =(index) =>{
    
    if(tablero[index] || ganador ){
      return
    }

    //actualizar tablero 
    const newTablero=[... tablero]
    newTablero[index] =turno
    setTablero(newTablero)


    //change turno
    const newTurno= turno=== turns.X ? turns.O : turns.X
    setTurno(newTurno)

    //Winner?
    const newWinner = checkWinner(newTablero)
    if(newWinner){
      confetti({
        particleCount: 350,
        spread: 80,
      })
      setGanador(newWinner)
    } else if (checkEndGame(newTablero)){  //empate
      setGanador(false) 
      
    }

  }

  const resetGame=()=>{
    setTablero(Array(9).fill(null))
    setTurno(turns.X)
    setGanador(null)
  }

  return (
    <>
    <main className='board'>
      <div className='title'>
        <h1>GAME THREE LINE</h1>
        <img src="../public/peet.png" alt="game-peet" />
      </div>

      <div>
        <button class="reset-game" onClick={resetGame}>Reset Game</button>
      </div>
    
      
      
      <section className='game'>
        {
          tablero.map((square,index) =>{
            return (
              <>
              
              <Square
              key={index}
              index={index}
              updatetablero={updatetablero}
              >
              
              {square}
            
              </Square>
      
              </>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turno === turns.X}> {turns.X}</Square>
        <Square isSelected={turno === turns.O}> {turns.O}</Square> 
      </section>

      <ModalWinner resetGame={resetGame} ganador={ganador}/>


    </main>
    
          
    </>
  )
}

export default App
