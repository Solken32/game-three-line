import {Square} from './Square.jsx'

export function ModalWinner({ganador,resetGame}){ 
    if (ganador===null) return null
    const ganadorText= ganador===false ? "Empate":"😎😎 Winner: "
    return (
        <>
        
        <div className='modal-overlay'></div>
        <section className='winner'>
            <h2>{ganadorText}</h2>
            <header className='winner-header'>
                {ganador && <Square>{ganador}</Square>}
            </header>
            <footer>
                <button onClick={resetGame}>Game Again</button>
            </footer>
        
        </section>            
        </>
    )
}
