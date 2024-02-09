import React from "react";
import { spt } from "../../../utils/spt";

const ListSpt = () => {
  const data = spt.data;
  return (
    <div className="p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
      <div className="rounded-[40px] w-full bg-[#fff] overflow-auto">
        <table className="w-full">
          <thead className="">
            <tr className="">
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Nomor SPT
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Tanggal Mulai
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Tanggal Berakhir
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Personil
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider">
                Kode Kegiatan
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
                  {item.nomor}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.mulai}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.selesai}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.personil}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.kode}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListSpt;
