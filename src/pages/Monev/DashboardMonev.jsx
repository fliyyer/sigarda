import React from 'react'
import Sidebar from '../../components/ui/Sidebar'
import { Outlet } from 'react-router'

const DashboardMonev = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <div className="p-2 md:p-8 flex-grow overflow-y-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardMonev
