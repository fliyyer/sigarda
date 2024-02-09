import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../components/ui/Spt/Sidebar'

const DashboardSpt = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex w-full overflow-auto">
                <div className="p-2 md:p-8 overflow-auto w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardSpt
