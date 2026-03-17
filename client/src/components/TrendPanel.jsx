import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function TrendPanel({ data }) {
  return (
    <div className="panel trend-panel">
      <div className="panel-head">
        <div>
          <h3>Balance Trend</h3>
          <p>Wallet movement across recent weeks</p>
        </div>
      </div>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c5cff" stopOpacity={0.85} />
                <stop offset="95%" stopColor="#7c5cff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1d2340" strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fill: "#9da7d6", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7c5cff"
              fill="url(#trendFill)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendPanel;