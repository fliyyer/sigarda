import React from 'react'
import Sidebar from '../../components/ui/Sidebar'
import { Outlet } from 'react-router'
import { useLogin } from '../../utils/useLogin'

const DashboardMonev = () => {
    useLogin()
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex w-full">
                <div className="p-2 md:p-8 overflow-auto flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardMonev
