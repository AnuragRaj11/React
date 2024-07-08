import { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import Homee from './components/Homee'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { countercontext } from './context/context'
import { useFormAction } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const [event, handle] = useState({})
  const [showbtn, setData] = useState([])
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


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

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()

  return (
    <>
      {showbtn && <button>rendering occur</button>}
      <input type="text" name="an" id="11" onChange={handleChange} />

      <RouterProvider router={router} />


      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>

  )
}

export default App
