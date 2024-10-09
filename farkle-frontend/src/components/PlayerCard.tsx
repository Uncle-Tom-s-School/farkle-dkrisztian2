
export type PlayerCardProp = {
    total: number,
    bankedPoints: number,
    subTotalforRound: number,
    currentDiceValue: number
}


const PlayerCard = (props: PlayerCardProp) => {
  return (
    <div className='player-card'>
        <table>
          <tr>
            <th>total/</th>
            <th>{props.total}</th>
          </tr>

          <tr>
              <td colSpan={2} className='text-right'>{props.bankedPoints}</td>
          </tr>

          <tr>
            <td colSpan={2}>round</td>
          </tr>

          <tr>
            <td colSpan={2} className='text-right'>{props.subTotalforRound}</td>
          </tr>

          <tr>
            <td colSpan={2}>selected</td>
          </tr>

          <tr>
            <td colSpan={2} className='text-right'>{props.currentDiceValue}</td>
          </tr>


        </table>
    </div>
  )
}

export default PlayerCard