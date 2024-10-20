import { useContext, useState } from "react"

export type TabProps = {
    targetNumber: number,
    player: string
}

const Tab = (props: TabProps) => {

    const [storedPoints, setStoredPoints] = useState<number>(0)
    const [roundPoints, setRoundsPoints] = useState<number>(0)
    const [selectedPoints, setSelectedPoints] = useState<number>(0)

  return (
    <div className="tab">
        <h1>{props.player}</h1>
        <h3>Total / <span>{props.targetNumber}</span></h3>
        <div className="stored">
            <h2>{storedPoints}</h2>
        </div>
        <div>
            <label className="asd">Round</label>
            <h2>{roundPoints}</h2>
        </div>
        <div>
            <label className="asd">Selected</label>
            <h2>{selectedPoints}</h2>
        </div>
    </div>
  )
}

export default Tab