import React from "react";
import { monitoring } from "../../../utils/monitoring";

const MonitoringTarget = () => {
  const data = monitoring.data;
  return (
    <div className="p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
      <div className="overflow-auto rounded-[40px]">
        <table className="min-w-full bg-[#fff]">
          <thead className="">
            <tr className="">
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Pita Frekuensi (MHz)
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Step Width R&S
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Step Width TCI
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Step Width LS Telecom
              </th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody className="bg-white">
              <tr>
                <td className="px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.servis}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.frekuensi}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.rs}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.tci}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.lstelecom}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MonitoringTarget;
