import React, { useContext, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./Loading";

const ShowIndividualproduct = ({ product, onDelete }) => {
    const {backendUrl,productData,setProductData,fetchProducts}=useContext(Appcontext);
    const [isdone,setDone]=useState(false);
    async function onDelete()
    {
        setDone(true);
        try{
            const {data}=await axios.post(backendUrl+"/api/product/remove",{id:product._id});
            if(data.success)
            {
                setDone(false);
                fetchProducts();
                toast.success("Deletion successfull!")
            }
            else
            {
                setDone(false);
                toast.success(data.message);
            }

        }catch(err)
        {
            setDone(false);
            toast.error(err.message);
        }
    }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "12px 16px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        background: "#d5cdddff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        fontSize: "14px",
        color: "#000",
      }}
    >
      {isdone ? <Loading status={"Deleting"}/> : null}
      
      {product.image?.[0] && (
        <img
          src={product.image[0]}
          alt={product.name}
          width="50"
          height="50"
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      )}

     
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "600" }}>
          {product.name.slice(0, 15)}..
        </div>
        <div style={{ fontSize: "12px", color: "#555" }}>
          {product.category}
        </div>
        <div style={{ fontWeight: "600", marginTop: "4px" }}>
          ₹{product.price}
        </div>
      </div>


      <button disabled={isdone}
        onClick={onDelete}
        style={{
          padding: "6px 12px",
          fontSize: "12px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#e63946",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ShowIndividualproduct;
