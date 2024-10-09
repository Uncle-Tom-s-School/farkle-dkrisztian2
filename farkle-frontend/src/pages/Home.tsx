import PlayerCard from '../components/PlayerCard'

const TOTAL: number = 5000

const Home = () => {
  return (
    <div id="Game">
        <div id='playerCards'>
            <div className='player-1-card'>
                <PlayerCard currentDiceValue={400} total={TOTAL} bankedPoints={1000} subTotalforRound={400}/>
            </div>

            <div className='player-2-card'>
                <PlayerCard currentDiceValue={100} total={TOTAL} bankedPoints={1000} subTotalforRound={500}/>
            </div>
        </div>

        <div id='gameField'>

        </div>
    </div>   
  )
}

export default Home