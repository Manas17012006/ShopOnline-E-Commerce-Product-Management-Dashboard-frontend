import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const TopSellingProducts = () => {
  const { orderData, productData } = useContext(Appcontext);

  if (!orderData || !productData) {
    return <div>No product/order data available.</div>;
  }

  const productSales = {};
  orderData.forEach((order) => {
    order.orderData.forEach((p) => {
      if (!productSales[p.productId]) productSales[p.productId] = 0;
      productSales[p.productId] += p.qty;
    });
  });

  const data = Object.keys(productSales).map((id) => {
    const product = productData.find((p) => p._id === id);
    return {
      name: product ? product.name : id,
      sales: productSales[id],
    };
  });

  return (
    <div style={{ width: 500, margin: "20px" }}>
      <h3>Top Selling Products</h3>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TopSellingProducts;
