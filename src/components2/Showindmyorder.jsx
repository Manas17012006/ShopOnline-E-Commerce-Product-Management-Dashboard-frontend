import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Showindmyorder = ({ item }) => {
  const { productData } = useContext(Appcontext);
  function getproductName(productId) {
    for (let i = 0; i < productData.length; i++) {
      if (productData[i]._id === productId) {
        return productData[i].name;
      }
    }
    return "Unknown Product";
  }

  function getStatusStyle(status) {
    if (status === "Pending") {
      return {
        backgroundColor: "#fff3cd",
        color: "#856404"
      };
    }

    if (status === "Delivered") {
      return {
        backgroundColor: "#d4edda",
        color: "#155724"
      };
    }

    if (status === "Cancelled") {
      return {
        backgroundColor: "#f8d7da",
        color: "#721c24"
      };
    }

    return {};
  }

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "16px 20px",
        marginBottom: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px"
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#2c3e50"
          }}
        >
          ₹{item.price}
        </span>

        <span
          style={{
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "500",
            ...getStatusStyle(item.status)
          }}
        >
          {item.status}
        </span>
      </div>
      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "10px"
        }}
      >
        {item.orderData.map((product, index) => (
          <div
            key={index}
            style={{
              fontSize: "14px",
              color: "#555",
              padding: "4px 0"
            }}
          >
            {getproductName(product.productId)}(Qty:{product.qty})
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showindmyorder
