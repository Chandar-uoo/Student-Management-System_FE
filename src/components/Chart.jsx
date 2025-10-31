import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ yearData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Students per Year
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={yearData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="40%" // space between bars
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar
            dataKey="count"
            fill="#3b82f6"
            name="Number of Students"
            radius={[8, 8, 0, 0]}
            barSize={60} // makes single bar thick enough to see
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
