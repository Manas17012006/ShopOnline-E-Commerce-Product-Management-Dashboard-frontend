import axios from 'axios';
import api from "../utilities/axios"
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Appcontext } from '../context/Appcontext';

const Showindividual = ({ user }) => {
  
    const {backendUrl,fetchAdmins}=useContext(Appcontext);
    async function handleSubmit(e)
    {
        const userObj={userId:user._id};
        axios.defaults.withCredentials=true;
        try{
            const {data}=await api.post(backendUrl+'/api/auth/makeAdmin',userObj);
            if(data.success)
            {
                toast.success(`${user.name} is now a Admin`);
                fetchAdmins();
            }
            else
            {
                toast.error(data.message);
            }

        }catch(err)
        {
            toast.err(err.message);
        }
    }
  return (
    <div style={styles.row}>
      <div style={styles.column}>
        <span style={styles.label}>Name :</span> {user.name}
      </div>
      <div style={styles.column}>
        <span style={styles.label}>Email :</span> {user.email}
      </div>
      <div>
        <button style={styles.button} onClick={(e)=>handleSubmit(e)}>Make Admin</button>
      </div>
    </div>
  );
};

export default Showindividual;


const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #828181ff',
    alignItems: 'center',
    gap: '0.5rem',
  },
  column: {
    flex: '1 1 150px',
    minWidth: '120px',
    wordBreak: 'break-word',
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    padding: '0.3rem 0.6rem',
    border: '1px solid #000',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
