import { useRef, useEffect, useState,useMemo } from 'react'
import Homee from './components/Homee'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { countercontext } from './context/context'

function App() {
  // const [count, setCount] = useState(0)
  const [event, handle] = useState({})
  const [showbtn, setData] = useState([])


  // return (
  //   <>
  //     <div className="cards">
  //       <Card title="card1" descrip="hello react"/>
  //       <Card title="card2" descrip="hello react"/>
  //       <Card title="card3" descrip="hello react"/>
  //       <Card title="card4" descrip="hello react"/>
  //     </div>


  //   </>
  // )

  // useEffect(() => {
  //   alert("hello learner")  //strick mode

  // },)
  useEffect(() => {
    alert("hello 2 learner")

  }, [])
  // const hook = useRef(0)
  // hook.current = hook.current + 1;
  // alert('You clicked ' + hook.current + ' times!');

  const handleMouseOver = () => {
    alert("mouse")
  }

  const handleChange = (e) => {
    handle({ ...Data, [e.target.name]: e.target.id })
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Homee /></>
    },
  ])

  return (
    <>
      {showbtn && <button>rendering occur</button>}
      <input type="text" name="an" id="11" onChange={handleChange} />

      <RouterProvider router={router} />
    </>
  )
}

export default App
