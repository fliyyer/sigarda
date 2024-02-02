import React from 'react'
import Sidebar from '../../components/ui/Sidebar'
import { Outlet } from 'react-router'

const DashboardMonev = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="p-2 md:p-8 overflow-auto flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardMonev
