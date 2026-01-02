import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#FF5733"];

const ProductsPerCategory = () => {
  const { productData } = useContext(Appcontext);

  if (!productData || productData.length === 0) {
    return <div>No product data available.</div>;
  }
  const categoryCount = {};
  productData.forEach((p) => {
    if (!categoryCount[p.category]) categoryCount[p.category] = 0;
    categoryCount[p.category]++;
  });

  const data = Object.keys(categoryCount).map((cat) => ({
    name: cat,
    value: categoryCount[cat],
  }));

  return (
    <div style={{ width: 400, margin: "20px" }}>
      <h3>Products Per Category</h3>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ProductsPerCategory;
