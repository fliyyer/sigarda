import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { peminjaman } from "../../../utils/perangkat";
const PeminjamanList = () => {
  const getStatus = (status) => {
    switch (status) {
      case "Tidak Tersedia":
        return "bg-[#F4485D] text-[#F4485D]";
      case "Tersedia":
        return "bg-[#16AE65] text-[#16AE65]";
      default:
        return "";
    }
  };

  const data = peminjaman.data;

  const [tableList, setTable] = useState([]);

  useEffect(() => {
    setTable(data);
  });

  return (
    <div>
      <div>
        <Link
          to="/pelayanan/perangkat/peminjaman/add-peminjaman"
          className="flex gap-2 hover:underline mt-[15px] text-sm pl-6 items-center"
        >
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data
        </Link>
      </div>
      <div className="p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
        <div className="overflow-auto rounded-[40px]">
          <table className="min-w-full bg-[#fff]">
            <thead className="">
              <tr className="">
                <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                  Jenis Perangkat
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                  Merk / Type
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                  Gambar
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            {(tableList || []).map((item, index) => (
              <tbody className="bg-white">
                <tr key={item.id}>
                  <td className="px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                    {item.jenis_perangkat}
                  </td>
                  <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                    {item.merk}
                  </td>
                  <td className="px-6 text-[#000000] flex items-center text-sm py-4">
                    <img
                      src={item.image}
                      className="max-w-[135px] mx-auto max-h-[75px]"
                      alt=""
                    />
                  </td>
                  <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                    {item.status && (
                      <div
                        className={`flex items-center justify-center gap-1 rounded-full py-2 bg-opacity-25 text-xs font-normal ${getStatus(
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
    </div>
  );
};

export default PeminjamanList;
