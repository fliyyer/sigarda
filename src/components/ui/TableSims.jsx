import React from 'react'

const TableSims = (props) => {
    const { th1, th2, th3, th4, th5, th6, td1, td2, td3, td4, td5, td6, td7 } = props

    const getStatus = (status) => {
        switch (status) {
          case 'Off Air':
            return 'bg-[#F4485D] text-[#F4485D]';
          case 'On Air':
            return 'bg-[#16AE65] text-[#16AE65]';
          case 'Prelelim. Cancel':
            return 'bg-[#457EFF] text-[#457EFF]';
          default:
            return '';
        }
      };
      
  return (
        <table className='min-w-full rounded-[40px] bg-[#fff]'>
            <thead className=''>
              <tr className=''>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>#</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th1}</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th2}</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th3}</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th4}</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th5}</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] uppercase tracking-wider'>{th6}</th>

              </tr>
            </thead>
                <tbody className='bg-white'>
                <tr>
                    <td className='px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap'>{td1}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{td2}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{td3}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{td4}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{td5}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{td6}</td>
                    <td className='px-6 text-center text-sm py-4 whitespace-nowrap'>
                        {td7 && (
                        <div className={`flex items-center justify-center gap-1 rounded-full py-2 bg-opacity-25 text-xs font-medium ${getStatus(td7)}`}>
                            <div className={`rounded-full ${getStatus(td7)} w-[8px] h-[8px] font-medium`}></div>
                            <p>{td7}</p>
                        </div>
                        )}
                    </td>
                </tr>
                </tbody>
        </table>
  )
}

export default TableSims