'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import getHealthcareData from '../../../actions/getHealthcareData';
import sendEmail from '../../../actions/sendEmail';

const Page = () => {
  const params = useParams();
  const pageId = params?.id;
  const [patientData, setPatientData] = useState(null);

  const getData = async () => {
    const result = await getHealthcareData(pageId);
    console.log(result);
    if (result?.success === true) {
      setPatientData(result?.data);
    }
  };

  const handleVerifyAll = () => {
    console.log("All documents verified");
    alert("All documents have been verified successfully.");
  };

  const sendMailtoAuthority = async () => {
    const result = await sendEmail();
    console.log(result);
  }

  useEffect(() => {
    getData();
  }, [pageId]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Patient Details</h1>

      {patientData ? (
        <div className="bg-white p-6 rounded shadow-md divide-y divide-gray-200">
          {/* Patient Details Section */}
          <div className="pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-gray-600"><strong>Name:</strong> {patientData.beneficiary_name}</p>
              <p className="text-gray-600"><strong>Age:</strong> {patientData.age}</p>
              <p className="text-gray-600"><strong>Disease:</strong> {patientData.disease}</p>
              <p className="text-gray-600"><strong>Target Amount (ETH):</strong> {patientData.target_amount_eth}</p>
              <p className="text-gray-600">
                <strong>Status:</strong>
                <span
                  className={`ml-2 px-2 py-1 rounded text-white ${
                    patientData.patient_status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {patientData.patient_status}
                </span>
              </p>
              <button
                onClick={handleVerifyAll}
                className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
              >
                Verify Identity Proof
              </button>
              <p className="text-gray-600"><strong>Hospital Name:</strong> {patientData.hospital_name}</p>
            </div>
          </div>

          {/* Documents Section */}
          <div className="pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents Provided</h2>
            <ul className="space-y-4">
              <li className="text-gray-600">
                <strong>Estimation Letter:</strong>{' '}
                <a
                  href={patientData.hospital_estimation_letter_link}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              </li>
              <li className="text-gray-600">
                <strong>Hospital Bills:</strong>{' '}
                <a
                  href={patientData.medical_bill_link}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              </li>
              <li className="text-gray-600">
                <strong>Medical Reports:</strong>{' '}
                <a
                  href={patientData.medical_reports_link}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              </li>
            </ul>
            {/* Single Verify All Button */}
            <div className="mt-6 text-center">
              <button
                onClick={sendMailtoAuthority}
                className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
              >
                Send For Verifiaction
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading patient data...</p>
      )}
    </div>
  );
};

export default Page;