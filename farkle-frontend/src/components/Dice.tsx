import React, { useEffect, useState } from 'react'

const Dice = () => {
    const [value, setValue] = useState(Math.floor(Math.random() * 6 + 1))
    const [isSelected, setIsSelected] = useState(false)

    const toggleDice = () => {
        setIsSelected(!isSelected)
    }

  return (
    <div className='dice-holder'>
        <div className={isSelected? 'dice selected-dice':'dice'}       
        onClick={toggleDice}
        >{value}</div>
    </div>
  )
}

export default Dice