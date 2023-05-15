import React from 'react'
import AdminNav from '../../components/Admin/AdminNav/AdminNav'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
        <AdminNav />
        <Outlet />
    </>
  )
}

export default AdminLayout