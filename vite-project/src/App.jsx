// import { useState } from 'react'
import Card from "./components/Ccard"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="cards">
        <Card title="card1" descrip="hello react"/>
        <Card title="card2" descrip="hello react"/>
        <Card title="card3" descrip="hello react"/>
        <Card title="card4" descrip="hello react"/>
      </div>
    </>
  )
}

export default App
