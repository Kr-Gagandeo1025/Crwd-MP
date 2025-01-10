import React from 'react'
import getClient from "../../util/db"

const AdminDashbrd = () => {
    const client = getClient();
  return (
    <div>
      This is an admin dashboard
    </div>
  )
}

export default AdminDashbrd
