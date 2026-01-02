import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const OrdersperStatus = () => {
  const { orderData } = useContext(Appcontext);

  if (!orderData || orderData.length === 0) {
    return <div>No order data available.</div>;
  }

  const statuses = ["Pending", "Out for Delivery", "Delivered", "Cancelled"];

  const data = statuses.map((status) => ({
    name: status,
    value: orderData.filter((o) => o.status === status).length,
  }));

  return (
    <div style={{ width: 400, margin: "20px" }}>
      <h3>Orders Per Status</h3>
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

export default OrdersperStatus;
