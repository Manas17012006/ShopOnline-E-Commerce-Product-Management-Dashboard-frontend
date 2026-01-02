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
        {orderData.map((item)=>{
            return <Showorderindividual item={item}/>
        })}
    </div>
  )
}

export default Showorder