import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset ,incrementbyAmount } from './Redux/counterslice'

function Counter() {
  const dispatch= useDispatch()
  const count = useSelector((state)=>state.counterslice.count)
  const [amount,setAmount]= useState(0)
  const handleIncrement =()=>{
    if (amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }else{
      alert("enter valid amount")
    }
  }


  return (
    <div className='border text-center border p-5 rounded bg-success ' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

<h1 className='bg-success' style={{fontSize:'100px'}}>{count}</h1>

<button onClick={()=>dispatch(increment())} className='me-2 border btn btn-primary'> Increment</button>
<button onClick={()=>dispatch(decrement())} className='me-2 border btn btn-warning'> Decrement</button>
<button  onClick={()=>dispatch(reset())} className='me-2 border btn btn-danger'> Reset</button>


<input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='my-4 form-control' placeholder='enter the amount'/>
<button onClick={handleIncrement} className='me-2 border btn btn-danger'> Increment By  Amount</button>


    </div>
  )
}

export default Counter