import React from 'react';
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Table = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-blue-300">
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
        <thead className="text-white text-lg w font-bold bg-gradient-to-r from-blue-500 to-green-400 py-2 rounded-t-md">
          <tr>
            <th className="px-6 py-3 text-left font-medium">Staff</th>
            <th className="px-6 py-3 text-center font-medium">Present</th>
            <th className="px-6 py-3 text-center font-medium">Absent</th>
          </tr>
        </thead>
        <tbody className="bg-white md:h-80 overflow-y-auto">
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-2 font-medium">{item.title}</td>
              <td className="px-6 py-2 text-green-500 text-center">{item.present ? <FaCheck /> : ""}</td>
              <td className="px-6 py-2 text-red-700 text-center">{item.absent ? <IoCloseSharp /> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
