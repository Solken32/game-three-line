// component Square
export const Square = ({children, updatetablero,index,isSelected})=>{

    const classNameTurno = `square ${isSelected ? `is-selected` : ``}`

    const handleClick =()=>{
        updatetablero(index)
    }
    
    return (
        <div onClick={handleClick} className={classNameTurno}>
            {children}
        </div>
    )
}


