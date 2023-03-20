import React from 'react'
import { useState } from 'react'
import "./index.css"
const image = "https://plus.unsplash.com/premium_photo-1664361480362-4ad85f0b0c4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import {FaShareSquare} from 'react-icons/fa'
const App = () => {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)

  const handleLike = () => {
    if(!like){
      setLike(true)
      setCount(count+1)
    }
    else{
      setLike(false)
      setCount(count-1)
    }
  }
  return (
    <div className='container'>
      <h1 className='text-info'>POSTS</h1>
      <h4>LIKE COUNT : {count}</h4>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
       <FaUserAlt/> UserName
        </div>
          <img src= {image} alt='' height={'300px'} width= {'100%'}/>
        <div className="card-footer">
          {like ? ( 
              <AiOutlineHeart  className="text-danger" onClick={handleLike}/> 
          ) : (
            <AiOutlineHeart onClick={handleLike}/> 
          )}
           <BiComment/>  <FaShareSquare/>
        </div>

      </div>
      
 </div>
    )
}

export default App