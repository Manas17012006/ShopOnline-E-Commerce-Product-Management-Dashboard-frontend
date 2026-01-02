import React from 'react'
import NewNav from '../components/NewNav'
import Showcart from '../components2/Showcart'
import Footer from '../components/Footer'
import Showmyorders from '../components2/Showmyorders'

const MyCart = () => {
  return (
    <div>
        <NewNav/>
        <Showcart/>
        <Showmyorders/>
        <Footer/>
    </div>
  )
}

export default MyCart