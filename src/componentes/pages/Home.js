import React from 'react'
import Img from '../../assets/rick.png'

const Home = () => {
  return (
    <div className='pt-20'>
      <h1 className='text-center font-bold text-4xl pb-5'>Rick</h1>
      <img src={Img} alt='img not found' className='w-60 mx-auto' />
    </div>
  )
}

export default Home