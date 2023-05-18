import React from 'react'

const Reccomend = (props) => {
  return (
    
    <div className='flex mt-3'>
        <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
        <img className='' src={props.img} width={53}/> 
        <b className='ml-5 mt-3'>{props.name}</b>
        <button className='mt-3 ml-20' style={{backgroundColor:"lightgray", borderRadius:"45%" ,height:"30px" ,width:"80px"}}><b>Follow</b></button>
    </div>
  )
}

export default Reccomend