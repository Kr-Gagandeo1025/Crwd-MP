'use client'
import React, { useEffect } from 'react'

const AdminDashbrd = () => {
  const func = async () => {
    const response = await fetch("/api/verify-company",{
      method : "POST",
    })
    const result = await response.json();
    console.log(result)
  }
  
  useEffect (()=>{
    func();
  },[])
  return (
    <div>
      This is an admin dashboard
    </div>
  )
}

export default AdminDashbrd
