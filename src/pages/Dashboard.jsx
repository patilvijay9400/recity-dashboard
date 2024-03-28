import React from "react";
import { TbFilter } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Widget from "../components/ui/Widget";
import LineChart from "../components/ui/LineChart";
import Table from "../components/ui/Table";

const data = [
  { title: "Oliver Twist", present: null, absent: null },
  { title: "Trixie Tornado", present: true, absent: false },
  { title: "Felix Firestorm", present: true, absent: false },
  { title: "Vinny Vortex", present: false, absent: true },
  { title: "Frankie Flicker", present: true, absent: false },
  { title: "Bennie Blaze", present: true, absent: false },
  { title: "Nina Nebula", present: true, absent: false },
  { title: "Marina Mirage", present: false, absent: true },
  { title: "Jack Sparkles", present: false, absent: true },
  // Add more data items as needed
];

const Dashboard = () => {
  return (
    <div>
      <header className="flex justify-between mb-5">
        <div className="flex gap-2 items-center">
          <TbFilter className="text-green-300 text-3xl" />
          <h6 className="mb-0 text-xl font-medium">Mathura</h6>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineCalendarMonth className="text-green-300 text-3xl" />
          <p className="mb-0 text-xl">Today</p>
        </div>
      </header>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Widget title="Widget 1" value={12345} small />
          <Widget title="Widget 2" value={67890} small />
          <Widget title="Widget 3" value={54321} small />
          <Widget title="Widget 4" value={98765} small />
          <Widget title="Widget 5" value={24680} small/>
        </div>
        <div className="lg:flex gap-4 py-5 justify-between">
          <div className="w-3/5">
            <LineChart />
          </div>
          <Table data={data} className="w-2/5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Widget title="Widget 1" value={12345} large />
          <Widget title="Widget 2" value={67890} large />
          <Widget title="Widget 3" value={54321} small />
          <Widget title="Widget 4" value={98765} small />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
