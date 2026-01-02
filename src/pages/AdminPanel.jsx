import React, { useContext, useEffect } from 'react'
import NewNav from '../components/NewNav'
import { Appcontext } from '../context/Appcontext'
import NotAdmin from '../components/NotAdmin'
import Admin from './Admin'
const AdminPanel = () => {
  const { userData, getUserData } = useContext(Appcontext);

  useEffect(() => {
    if (!userData) {
      getUserData(); 
    }
  }, [userData, getUserData]);

  


  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NewNav />
      {userData.isAdmin ? <Admin/> : <NotAdmin/>}
    </div>
  )
}

export default AdminPanel;
