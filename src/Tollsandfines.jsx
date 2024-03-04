import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import "./Tollsandfines.css";

const data = [
  { name: "Unpaid", value: 1300 },
  { name: "Paid", value: 3900 },

];

const finedata = [
    { year: 2023, value: 3300 },
    { year: 2024, value: 3000 },
  ];
  
  const salikchargesdata = [
    { year: 2023, value: 720 },
    { year: 2024, value: 1200 },
  ];

  const damagesdata = [
    { year: 2023, value: 1100 },
    { year: 2024, value: 1000 },
  ];

const COLORS = ["#0088FE", "#00C49F"]; 

const TollsAndFines = () => {
  return (
    <div className="tolls-and-fines-container">
      <div className="pie-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            fill="#8884d8"
            label="value"
            paddingAngle={2}
            dataKey="value"
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="line-container">
      <LineChart width={350} height={300} data={finedata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" name="Fines" stroke="#8884d8" />
    </LineChart>

    <LineChart width={350} height={300} data={salikchargesdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" name="Salik Charges" stroke="#8884d8" />
    </LineChart>

    <LineChart width={350} height={300} data={damagesdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" name="Damages" stroke="#8884d8" />
    </LineChart>
      </div>
    </div>
  );
};

export default TollsAndFines;
