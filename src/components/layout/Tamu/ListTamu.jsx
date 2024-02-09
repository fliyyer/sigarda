import React from "react";
import { tamu } from "../../../utils/identifikasi";

const ListTamu = () => {
  const getStatus = (status) => {
    switch (status) {
      case "Off Air":
        return "bg-[#F4485D] text-[#F4485D]";
      case "Selesai":
        return "bg-[#16AE65] text-[#16AE65]";
      case "Menunggu Antrian":
        return "bg-[#457EFF] text-[#457EFF]";
      default:
        return "";
    }
  };

  const data = tamu.data;
  return (
    <div className="p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
      <div className="overflow-auto rounded-[40px]">
        <table className="min-w-full bg-[#fff]">
          <thead className="">
            <tr className="">
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Perusahaan atau Instansi
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Kontak
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Keperluan
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Jenis Layanan
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody className="bg-white">
              <tr key={item.id}>
                <td className="px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.nama}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.perusahaan}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.kontak}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.Keperluan}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.layanan}
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
  );
};

export default ListTamu;
