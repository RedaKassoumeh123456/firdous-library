import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = () => {
    redirect('dashboard/books');
    return (
        <div>
            
        </div>
    )
}

export default DashboardPage
