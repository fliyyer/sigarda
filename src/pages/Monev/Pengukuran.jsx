import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { identifikasi } from "../../utils/identifikasi";

const getStatus = (status) => {
  switch (status) {
    case "Off Air":
      return "bg-[#F4485D] text-[#F4485D]";
    case "On Air":
      return "bg-[#16AE65] text-[#16AE65]";
    case "Prelelim. Cancel":
      return "bg-[#457EFF] text-[#457EFF]";
    default:
      return "";
  }
};

const Pengukuran = () => {
  const data = identifikasi.data;
  return (
    <div className="">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Pengukuran</h1>
      <Outlet />
      {location.pathname === "/pengukuran" && (
        <div>
          <div className="flex justify-between mt-7 items-center">
            <Link
              to="/pengukuran/add"
              className="flex gap-2 hover:underline mt-[15px] text-sm pl-6 items-center"
            >
              <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
                <FaPlus />
              </span>
              Tambah Data
            </Link>
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
                onChange={(e) => handleChangeTable(e, location.pathname)}
              />
              <div className="absolute bottom-2 inset-y-0 left-0 flex items-center pl-3">
                <CiSearch className="w-5 mt-2 h-5 text-[#AEB8CF]" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
            <table className="min-w-full rounded-[40px] bg-[#fff]">
              <thead className="">
                <tr className="">
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Frekuensi (MHz)
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Servis
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Subservis
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Kelas Emisi
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                    Status
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
                      {item.frekuensi}
                    </td>
                    <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                      {item.client}
                    </td>
                    <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                      {item.service}
                    </td>
                    <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                      {item.subservis}
                    </td>
                    <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                      {item.kelasemisi}
                    </td>
                    <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                      {item.status && (
                        <div
                          className={`flex items-center justify-center gap-1 rounded-full py-2 bg-opacity-25 text-xs font-medium ${getStatus(
                            item.status
                          )}`}
                        >
                          <div
                            className={`rounded-full ${getStatus(
                              item.status
                            )} w-[8px] h-[8px] font-medium`}
                          ></div>
                          <p>{item.status}</p>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pengukuran;
