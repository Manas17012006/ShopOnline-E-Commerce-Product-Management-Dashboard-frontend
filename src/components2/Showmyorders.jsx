import React, { useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { useContext } from 'react';
import Showindmyorder from './Showindmyorder';
const Showmyorders = () => {
  const { userData, orderData } = useContext(Appcontext);
const [arr, setArr] = useState([]);

useEffect(() => {
  if (userData && orderData) {
    const filteredOrders = orderData.filter(
      (item) => item.name === userData.name
    );
    setArr(filteredOrders);
  }
}, [userData, orderData]);
  return (
    <div>
        <div style={{"textAlign":'center',"fontSize":25}}>Your Orders</div>
        {arr.map((item)=>{
            return <Showindmyorder item={item}/>
        })}
    </div>
  )
}

export default Showmyorders