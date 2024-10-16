import Controls from '../components/Controls'
import GameTable from '../components/GameTable'
import Tab from '../components/Tab'

const Home = () => {
  return (
    <>
      <aside className='left'>
        <Tab targetNumber={5000} player='P1'/>
        <Tab targetNumber={5000} player='P2'/>
      </aside>
      <GameTable />   
      <aside className='right'>
      <Controls/>
      </aside>
    </>
  )
}

export default Home