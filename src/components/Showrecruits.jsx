import React, { useEffect, useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import Showindividual from "./Showindividual";
const Showrecruits = () => {
  const { adminData, setAdminData, fetchAdmins } = useContext(Appcontext);
  useEffect(() => {
    fetchAdmins();
  }, []);
  return (
    <div>
      {adminData.map((item) => (
        <Showindividual key={item._id} user={item} />
      ))}
    </div>
  );
};

export default Showrecruits;
