import React, { useContext, useEffect } from 'react'
import { Appcontext } from '../context/Appcontext'
import Showorderindividual from './Showorderindividual';

const Showorder = () => {
    const {getorderdata,orderData}=useContext(Appcontext);
    useEffect(()=>{
        getorderdata();
    },[])
  return (
    <div>
    {[...orderData].reverse().map((item) => (
      <Showorderindividual key={item._id} item={item} />
    ))}
  </div>
  )
}

export default Showorder