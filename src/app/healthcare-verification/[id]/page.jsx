'use client'
 
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
const page = () => {
  const params = useParams();
  const pageId = params?.id;
  const [patientData, setPatientData] = useState(null)

  const getData = async () => {
    const response = await fetch("/api/get-healthcare-data",{
      method:"POST",
      body:JSON.stringify({
        "id":pageId
      }),
      headers:{
        "Content-Type":"application/json",
      }
    })
    const result = await response.json();
    console.log(result);
    if(result?.success === true){
      setPatientData(result?.data)
    }   
  }

  useEffect(()=>{
    getData();
  },[pageId])
  return (
    <div>
      Name = {patientData?.beneficiary_name} <br />
      Age = {patientData?.age} <br />
      Amount = {patientData?.target_amount_eth} ETH <br />
      Disease = {patientData?.disease} <br />
      Patient Status = {patientData?.patient_status} <br />
      Hospital Name = {patientData?.hospital_name} <br />
      Documents Provided <br />
      Estimation Letter = {patientData?.hospital_estimation_letter_link} <br />
      Hospital Bills = {patientData?.medical_bill_link} <br />
      Reports = {patientData?.medical_reports_link}
    </div>
  )
}

export default page
