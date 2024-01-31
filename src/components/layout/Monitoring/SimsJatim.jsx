import React from 'react'
import TableSims from '../../ui/TableSims'

const SimsJatim = () => {
  return (
    <div className="overflow-x-auto p-11 bg-[#F6F8FF] rounded-[40px] mt-4">
         <TableSims
          th1="Frekuensi (MHz)"
          th2="Client"
          th3="Service"
          th4="Subservis"
          th5="Kelas Emisi"
          th6="Status"
          td1="1"
          td2="MHz 100"
          td3="RAS 50"
          td4="TCI 25"
          td5="Ls Telecon 10"
          td6="Ls Telecon 10"
          td7="On Air"
        />
      </div>
  )
}

export default SimsJatim