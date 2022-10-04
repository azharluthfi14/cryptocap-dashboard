import React, { useState } from "react";
import { Navbar, Sidebar, Card, CardChart } from "../components";
import { useGetCoinHistoryQuery } from "../services/coinApi";
import { Select } from "antd";
const { Option } = Select;
const DashboardPage = () => {
  const [timeperiod, setTimeperiod] = useState("7d");
  const coinId = ["Qwsogvtv82FCd"];
  const { data: coinHistory } = useGetCoinHistoryQuery({ coinId, timeperiod });
  const time = ["3h", "24h", "7d", "30d", "5y"];
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <aside>
          <Sidebar />
        </aside>
        <main className="h-full bg-violet-100 pt-6 px-4 w-full">
          <Card />
          <div className="bg-white p-5 rounded-md mt-5">
            <div className="mb-5 flex flex-row">
              <Select
                defaultValue="7d"
                className="select-timeperiod"
                placeholder="Select Timeperiod"
                onChange={(value) => setTimeperiod(value)}
              >
                {time.map((date) => (
                  <Option key={date}>{date}</Option>
                ))}
              </Select>
            </div>
            <CardChart coinHistory={coinHistory} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
