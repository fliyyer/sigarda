import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import AddRepository from "./AddRepository";
import AddFileDokumen from "./AddFileDokumen";

const TableTemplate = () => {
  const data = [
    {
      no: 1,
      folder: "Template",
      nama: "Template Pengukuran Radio Siaran.pdf",
      tanggal: "2022-11-03",
    },
    {
      no: 2,
      folder: "Template",
      nama: "Template Pemeriksaan Microwave Link.pdf",
      tanggal: "2022-11-07",
    },
    {
      no: 3,
      folder: "Template",
      nama: "Template Pengukuran Radio Siaran.pdf",
      tanggal: "2022-11-03",
    },
    {
      no: 4,
      folder: "Template",
      nama: "Template Pemeriksaan Microwave Link.pdf",
      tanggal: "2022-11-07",
    },
  ];

  return (
    <div className="container mt-8">
      <div className="bg-[#F6F8FF] py-5 rounded-[40px] px-8 mx-auto">
        <div className="overflow-auto">
          <table className="min-w-full  overflow-hidden">
            <thead className="">
              <tr>
                <th className="py-4 text-left px-4"></th>
                <th className="py-4 text-center text-[14.4px] opacity-70 text-[#3A3A49] px-4">
                  Folder
                </th>
                <th className="py-4 text-left text-[14.4px] opacity-70 text-[#3A3A49] px-4">
                  Nama
                </th>
                <th className="py-4 text-left text-[14.4px] opacity-70 text-[#3A3A49] px-4">
                  Tanggal
                </th>
                <th className="py-4 text-left text-[14.4px] opacity-70 text-[#3A3A49] px-4">
                  Unggah
                </th>
                <th className="py-4 text-left text-[14.4px] opacity-70 text-[#3A3A49] px-4">
                  Edit
                </th>
                <th className="py-4 text-left text-[14.4px] opacity-70 text-[#3A3A49] px-4"></th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item) => (
                <>
                  <div className="mt-3" key={item.no}></div>
                  <tr className="bg-[#fff]">
                    <td className="py-2 bg-[#F6F8FF] text-[#ADC0F8] font-bold px-4">
                      {item.no}
                    </td>
                    <td className="py-2 rounded-l-[10px] items-center text-[#4676FB] text-[13.891px] px-4">
                      <AiFillFolderOpen className="inline-flex items-center text-2xl mb-1 mr-4" />{" "}
                      {item.folder}
                    </td>
                    <td className="py-2 px-4">{item.nama}</td>
                    <td className="py-2 px-4">{item.tanggal}</td>
                    <td className="py-2 px-4">
                      <button className="bg-main-color text-[#FAFAFB] text-sm px-4 py-[6px] rounded-lg">
                        Unggah
                      </button>
                    </td>
                    <td className="py-2 px-4">
                      <button className="bg-main-color bg-opacity-10 p-3 rounded-full">
                        <BiEditAlt className="text-main-color text-lg" />
                      </button>
                    </td>
                    <td className="rounded-r-[10px]">
                      <SlOptionsVertical className="text-[#ADC0F8] text-lg" />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 justify-between flex [@media(max-width:1000px)]:flex-wrap gap-8">
        <AddRepository />
        <AddFileDokumen />
      </div>
    </div>
  );
};

export default TableTemplate;
