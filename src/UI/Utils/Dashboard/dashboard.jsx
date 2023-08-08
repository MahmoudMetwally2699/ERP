import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import Preloader from "./preloader";
import { Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faChartBar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./dashboard.css";
import "react-toggle/style.css"; // Import the CSS
import Toggle from "react-toggle";
import { apiReports } from "../../../features/reports";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from API
      try {
        const response = await dispatch(apiReports(localToken));
        console.log("api data from dashboard", response.payload);
        setDataLoaded(true); // Mark data as loaded
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const apiData = useSelector((state) => state.apiReports.data);
  const apiDataStatus = useSelector((state) => state.apiReports.status);

  const [isDraggable, setIsDraggable] = useState(true);
  const [profit, setProfit] = useState(0);
  const initialProfit = 500;
  const incrementAmount = 10;
  const animationDelay = 50;

  // get keys from api reports
  const [sales, setSales] = useState("DailySale");
  const [DebitSale, setDebitSale] = useState("DailyDebitSale");
  const [Purchas, setPurchas] = useState("DailyPurchase");

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  //test api data
  const keysApiReport = Object.keys(apiData.Report);
  const SaleReportKeys = keysApiReport.slice(0, 3);
  const DebitSaleReportKeys = keysApiReport.slice(3, 6);
  const PurchaseReportKeys = keysApiReport.slice(6, 9);
  const DebitPurchaseReportKeys = keysApiReport.slice(9, 12);
  const ExpenseReportKeys = keysApiReport.slice(12, 15);
  //use state for keys

  const handleToggleDrag = () => {
    setIsDraggable(!isDraggable);
  };
  // Initialize Bootstrap Toggle

  const layouts = {
    lg: [
      { i: "box1", x: 0, y: 0, w: 1, h: 1.5 },
      { i: "box2", x: 1, y: 0, w: 1, h: 1.5 },
      { i: "box3", x: 2, y: 0, w: 2, h: 1.5 },
      { i: "barChart", x: 0, y: 1, w: 2, h: 3 },
      { i: "lineChart", x: 2, y: 1, w: 2, h: 3 },
      { i: "pieChart", x: 1, y: 2, w: 2, h: 3 },
    ],
  };

  const boxes = [
    {
      id: "box1",
      title: `Reports ${sales}`,
      content: `$${apiData.Report[sales]}`,
      icon: faDollarSign,
      dropdownOptions: SaleReportKeys,
      onclick: (event) => {
        setSales(event.target.value);
      },
    },
    {
      id: "box2",
      title: `Reports of ${DebitSale}`,
      content: `$${apiData.Report[DebitSale]}`,
      icon: faChartBar,
      dropdownOptions: DebitSaleReportKeys,
      onclick: (event) => {
        setDebitSale(event.target.value);
      },
    },
    {
      id: "box3",
      title: `Reports of ${Purchas}`,
      content: `$${apiData.Report[Purchas]}`,
      icon: faChartLine,
      dropdownOptions: PurchaseReportKeys,
      onclick: (event) => {
        setPurchas(event.target.value);
      },
    },
  ];

  let trimObjects = (object, start = 0, end = Object.keys(object).length) => {
    let UIArray = [];
    let realData = Object.keys(object);
    realData = realData.slice(start, end);
    for (let i = 0; i < realData.length; i++) {
      let data = { name: realData[i], value: object[realData[i]] };

      UIArray.push(data);
    }
    return UIArray;
  };
  //get protit data from api
  const apiprofit = apiData.Profit;
  const reportDataApi = apiData.Report;
  const profitUiArray = trimObjects(apiprofit);
  const DebitPurchaseUiArray = trimObjects(reportDataApi, 9, 12);
  const ExpenseUiArray = trimObjects(reportDataApi, 12, 16);
  console.log("temp data ", profitUiArray);
  console.log("DebitPurchaseUiArray ", DebitPurchaseUiArray);
  console.log("ExpenseUiArray ", ExpenseUiArray);
  const barChartData = ExpenseUiArray;

  const lineChartData = DebitPurchaseUiArray;

  const pieChartData = profitUiArray;

  const COLORS = ["#19a979", "#fc636b", "#fdbc40", "#537780"];

  return (
    <div className="dashboard-container">
      <label class="toggleSwitch nolabel" onclick="">
        <input
          type="checkbox"
          checked={isDraggable}
          onChange={handleToggleDrag}
        />
        <a></a>
        <span>
          <span class="left-span">Disabled</span>
          <span class="right-span">Enabled</span>
        </span>
      </label>

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
        isDraggable={isDraggable}
      >
        {boxes.map((box) => (
          <div
            key={box.id}
            data-grid={{ w: 2, h: 6, isResizable: true, isDraggable: true }}
          >
            <Paper className="box">
              <div className="box-header">
                <FontAwesomeIcon icon={box.icon} className="box-icon" />
                <h2>{box.title}</h2>
              </div>
              <p className="box-content">{box.content}</p>
              <div className="dropdown1-container">
                <select
                  className="dropdown1"
                  onClick={(event) => {
                    box.onclick(event);
                  }}
                >
                  {box.dropdownOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </Paper>
          </div>
        ))}
        {/* Bar Chart */}
        <div key="barChart" data-grid={{ w: 2, h: 4 }}>
          <Paper className="box chart-box">
            <h2 className="chart-title">Bar Chart</h2>
            <div className="chart-content">
              <BarChart width={500} height={300} data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#19a979" />
              </BarChart>
            </div>
          </Paper>
        </div>
        {/* Line Chart */}
        <div key="lineChart" data-grid={{ w: 2, h: 4 }}>
          <Paper className="box chart-box">
            <h2 className="chart-title">Line Chart</h2>
            <div className="chart-content">
              <LineChart width={500} height={300} data={lineChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fc636b"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
          </Paper>
        </div>
        {/* Pie Chart */}
        <div key="pieChart" data-grid={{ w: 2, h: 3 }}>
          <Paper className="box chart-box">
            <h2 className="chart-title">Pie Chart</h2>
            <div className="chart-content">
              <PieChart width={500} height={300}>
                <Pie
                  dataKey="value"
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {pieChartData.map((entry, index) => (
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
          </Paper>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
