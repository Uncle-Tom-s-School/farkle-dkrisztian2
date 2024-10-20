import { useState } from 'react'

const Roll = () => {

    };

const Bank = () =>{
    
}

const Controls = () => {
  const [rolled, setRolled] = useState(false)

  return (
    <>
        {
            rolled?<>
            <button>STORE SELECTED & PASS</button>
            <button>STORE SELECTED & ROLL AGAIN</button>
            </>:
            <div id='Buttons'>
                <button className='controlButton' onClick={Roll}>ROLL</button>
                <button className='controlButton' onClick={Bank}>BANK</button>
            </div>
            
        }
    </>
  )
}

export default Controls