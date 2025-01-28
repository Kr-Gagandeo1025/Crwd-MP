'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const params = useParams();
  const companyId = params?.id;
  const [companyData, setCompanyData] = useState(null);
  const [error, setError] = useState(null);
  const [companyAge, setCompanyAge] = useState(null);
  const [showCompanyAge, setShowCompanyAge] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({});
  const [finalStatus, setFinalStatus] = useState("Pending");

  const getCompanyData = async () => {
    try {
      const response = await fetch("/api/get-company-data", {
        method: "POST",
        body: JSON.stringify({ id: companyId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result?.success) {
        setCompanyData(result?.data);
        setVerificationStatus({
          cin: "Pending",
          gstin: "Pending",
          pan_number: "Pending",
          tin: "Pending",
        });
      } else {
        setError(result?.message || "No company data found.");
      }
    } catch (err) {
      console.error("Error fetching company data:", err);
      setError("An error occurred while fetching company data.");
    }
  };

  useEffect(() => {
    if (companyId) {
      getCompanyData();
    }
  }, [companyId]);

  const calculateCompanyAge = (dateString) => {
    if (!dateString) return;

    const incorporationDate = new Date(dateString);
    if (isNaN(incorporationDate.getTime())) {
      console.error("Invalid date object:", incorporationDate);
      setCompanyAge("Invalid Date Format");
      return;
    }

    const currentDate = new Date();
    const totalYears = currentDate.getFullYear() - incorporationDate.getFullYear();
    let totalMonths = currentDate.getMonth() - incorporationDate.getMonth() +
      (currentDate.getDate() >= incorporationDate.getDate() ? 0 : -1);

    const adjustedYears = totalMonths >= 0 ? totalYears : totalYears - 1;
    const adjustedMonths = totalMonths >= 0 ? totalMonths : totalMonths + 12;

    setCompanyAge(`${adjustedYears} years and ${adjustedMonths} months`);
  };

  const toggleCompanyAge = () => {
    if (showCompanyAge) {
      setShowCompanyAge(false);
    } else {
      calculateCompanyAge(companyData.date_of_incorporation);
      setShowCompanyAge(true);
    }
  };

  const handleVerification = (field, status) => {
    setVerificationStatus((prevState) => ({
      ...prevState,
      [field]: status,
    }));
  };

  const handleFinalStatus = (status) => {
    setFinalStatus(status);
  };

  // Check if all fields are either "Verified" or "Rejected"
  const allFieldsChecked = Object.values(verificationStatus).every(
    (status) => status === "Verified" || status === "Rejected"
  );

  if (error) {
    return <div className="text-red-500 text-center mt-10 animate-pulse">Error: {error}</div>;
  }

  if (!companyData) {
    return (
      <div className="text-gray-500 text-center mt-10 animate-bounce">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 animate-fade-in-down">
        Company Verification
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="space-y-6 animate-slide-in-left">
          <p>
            <strong className="font-medium">Beneficiary Name:</strong>{" "}
            {companyData.beneficiary_name}
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(companyData.beneficiary_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 underline hover:text-blue-700 transition-colors"
            >
              Know More
            </a>
          </p>

          {[{ label: "CIN", value: companyData.cin, field: "cin", link: `https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do?cin=${companyData.cin}` },
            { label: "GSTIN", value: companyData.gstin, field: "gstin", link: `https://services.gst.gov.in/services/searchtp?gstin=${companyData.gstin}` },
            { label: "PAN Number", value: companyData.pan_number, field: "pan_number", link: `https://www.incometaxindiaefiling.gov.in/e-Filing/Services/KnowYourPANLink.html` },
            { label: "TIN", value: companyData.tin, field: "tin", link: `https://www.tinxsys.com/TinxsysInternetWeb/searchByTIN.do?tinNumber=${companyData.tin}` }]
            .map((item, index) => (
              <p key={index} className={`flex items-center ${verificationStatus[item.field] === "Verified" ? "text-green-600" : verificationStatus[item.field] === "Rejected" ? "text-red-600" : ""}`}>
                <strong>{item.label}:</strong>
                <span className="ml-2">{item.value}</span>
                {verificationStatus[item.field] === "Pending" && (
                  <div className="flex space-x-2 ml-4">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-all"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      Check
                    </button>
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded shadow hover:bg-green-600 transition-all"
                      onClick={() => handleVerification(item.field, "Verified")}
                    >
                      ✓
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 transition-all"
                      onClick={() => handleVerification(item.field, "Rejected")}
                    >
                      ✗
                    </button>
                  </div>
                )}
                {verificationStatus[item.field] !== "Pending" && (
                  <span className="ml-4 italic">
                    {verificationStatus[item.field] === "Verified" && "Verified"}
                    {verificationStatus[item.field] === "Rejected" && "Rejected"}
                  </span>
                )}
              </p>
            ))}

          <p>
            <strong>Date of Incorporation:</strong>{" "}
            <span
              className="font-semibold text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={toggleCompanyAge}
            >
              {companyData.date_of_incorporation}
            </span>
          </p>
          {showCompanyAge && (
            <p className="text-blue-500">
              <strong>Company Age:</strong> {companyAge}
            </p>
          )}
        </div>

        <div className="space-y-6 animate-slide-in-right">
          <p>
            <strong>Entity Type:</strong> {companyData.entity_type}
          </p>
          <p>
            <strong>Target Amount (ETH):</strong> {companyData.target_amount_eth} ETH
          </p>

          <h2 className="text-xl font-semibold text-blue-600">Documents</h2>

          {[{ label: "Bank Statement", link: companyData.bank_statement_link },
            { label: "CIN Document", link: companyData.cin_doc_link },
            { label: "Utility Bill", link: companyData.utility_bill_link }]
            .map((item, index) => (
              <p key={index} className="flex items-center">
                <strong>{item.label}:</strong>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-blue-500 underline hover:text-blue-700 transition-colors"
                >
                  View Document
                </a>
              </p>
            ))}
        </div>
      </div>

      {finalStatus === "Pending" && (
        <div className="fixed bottom-10 flex space-x-4">
          <button
            className={`px-5 py-2 ${allFieldsChecked ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"} text-white rounded shadow transition-all`}
            disabled={!allFieldsChecked}
            onClick={() => handleFinalStatus("Verified")}
          >
            Accept
          </button>
          <button
            className={`px-5 py-2 ${allFieldsChecked ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"} text-white rounded shadow transition-all`}
            disabled={!allFieldsChecked}
            onClick={() => handleFinalStatus("Rejected")}
          >
            Reject
          </button>
        </div>
      )}

      {finalStatus !== "Pending" && (
        <div
          className={`fixed bottom-10 text-2xl font-bold ${
            finalStatus === "Verified" ? "text-green-600" : "text-red-600"
          }`}
        >
          {finalStatus}
        </div>
      )}
    </div>
  );
};

export default Page;
