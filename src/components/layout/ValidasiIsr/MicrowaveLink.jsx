import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cvTablePagination from "../../../utils/tablePagination";
import Pagination from '@mui/material/Pagination';
import { InitValiadsiContext } from '../../../pages/Monev/Validasi';
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import api from '../../../services/api';

const getStatus = (status) => {
  switch (status) {
    case 'Off Air':
      return 'bg-[#F4485D] text-[#F4485D]';
    case 'On Air':
      return 'bg-[#16AE65] text-[#16AE65]';
    case 'Prelim. Cancel':
      return 'bg-[#457EFF] text-[#457EFF]';
    default:
      return '';
  }
};


const MicrowaveLink = () => {
  const ValidasiContext = useContext(InitValiadsiContext);
  const { value } = ValidasiContext.linkPage.table
  const [tableList, setTable] = useState([]);
  const tablePagination = cvTablePagination(value, 10);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setTable(tablePagination[0]);
    setPage(1);
  }, [value]);

  useEffect(() => {
    setTable(tablePagination[page - 1]);
  }, [page]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : tableList.map((item) => item.id));
  };

  const handleSelectRow = (rowId) => {
    const isSelected = selectedRows.includes(rowId);
    if (isSelected) {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((id) => id !== rowId)
      );
    } else {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowId]);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (!id) {
        console.log("Missing identification ID.");
        return;
      }
      await api.delete(`/microwave_link.php?id=${id}`);
      Swal.fire({
        icon: 'success',
        title: 'Item Deleted',
        text: 'The item has been successfully deleted.',
        focusConfirm: false,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500)

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while deleting the item.',
      });
    }
  };

  return (
    <div>
      <div>
        <Link to='/validasi/add-microwave' className="flex gap-2 hover:underline mt-[15px] text-sm pl-6 items-center">
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data
        </Link>
      </div>
      <div className="overflow-x-auto p-11 bg-[#F6F8FF] rounded-[40px] mt-4">
        <table className="min-w-full rounded-[40px] bg-[#fff]">
          <thead className="">
            <tr className="">
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
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
              <th className="px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          {(tableList || []).map((item, index) => (
            <tbody className="bg-white">
              <tr>
                <td className="px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectAll || selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                  />
                </td>
                <td className="px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.frequency}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.client}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.service}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.subservice}
                </td>
                <td className="px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap">
                  {item.emission_class}
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
                <td className="px-6 flex justify-center gap-4 items-center text-center text-sm py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(item.id)} className="bg-main-color bg-opacity-10 p-3 rounded-full">
                    <BiEditAlt className="text-main-color text-lg" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-3 rounded-full bg-[#FF0000] bg-opacity-10">
                    <MdDelete className="text-lg text-[#ff0000]" />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <Pagination
          className="flex justify-center -mb-4 pt-3"
          count={tablePagination.length}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MicrowaveLink;
