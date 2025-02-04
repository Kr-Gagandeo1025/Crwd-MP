'use client'

import sendEmail from '@/actions/sendEmail';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const params = useParams();
  const pageId = params?.id;
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("/api/get-education-data", {
        method: "POST",
        body: JSON.stringify({ "id": pageId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);

      if (result?.success === true) {
        setStudentData(result?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = async () => {
    const result = await sendEmail("student",studentData);
    console.log(result);
  }

  useEffect(() => {
    if (pageId) {
      getData();
    }
  }, [pageId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!studentData) return <p className="text-center text-red-500">No data found.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-600">Student Data</h1>
        <div className="space-y-6 text-lg text-gray-800">
          <p><strong className="text-indigo-700">Name:</strong> {studentData?.beneficiary_name}</p>
          <p><strong className="text-indigo-700">Address:</strong> {studentData?.address}</p>
          <p><strong className="text-indigo-700">Phone Number:</strong> {studentData?.phone_number}</p>
          <p><strong className="text-indigo-700">Enrollment Status:</strong> {studentData?.enrollment_status}</p>
          <p><strong className="text-indigo-700">Institute Roll Number:</strong> {studentData?.institute_roll_number}</p>
          <p>
            <strong className="text-indigo-700">Admission Letter:</strong> 
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700" onClick={() => window.open(studentData?.admission_letter_link, '_blank')}>View</button>
          </p>
          <p>
            <strong className="text-indigo-700">Identity Proof:</strong> 
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-green-700" onClick={() => window.open(studentData?.identity_proof_link, '_blank')}>View</button>
          </p>
          <p><strong className="text-indigo-700">Target Amount (ETH):</strong> {studentData?.target_amount_eth}</p>
        </div>
        <button className='bg-green-400 rounded px-5 py-3 text-xl mt-5 font-bold text-white' onClick={handleEmail}>Send for Verification</button>
      </div>
    </div>
  );
};

export default Page;
