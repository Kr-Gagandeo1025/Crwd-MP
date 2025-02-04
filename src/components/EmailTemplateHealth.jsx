const EmailTemplateHealth = ({ patientName, patientAge, disease, governmentIdUrl, costEstimationUrl, verificationUrl }) => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px', 
      border: '2px solid #D9B8FF', 
      maxWidth: '400px', 
      margin: '0 auto', 
      textAlign: 'center' 
    }}>
      <h2 style={{ color: '#000' }}>
        <span style={{ color: '#FFC107' }}>Cr</span>wd. - the web3 crowdfunding solution
      </h2>
      <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
        This email contains details of a patient from your hospital. Please go through the below mentioned details and click on the Verify Button, which will take you to a verification portal.
      </p>
      <div style={{ textAlign: 'left', margin: '20px 0' }}>
        <p><strong>Name:</strong> {patientName}</p>
        <p><strong>Age:</strong> {patientAge}</p>
        <p><strong>Disease:</strong> {disease}</p>
        <p><strong>Government ID:</strong> <a href={governmentIdUrl} style={{ color: '#007BFF' }}>View Document</a></p>
        <p><strong>Cost Estimation Doc:</strong> <a href={costEstimationUrl} style={{ color: '#007BFF' }}>View Document</a></p>
      </div>
      <a 
        href={verificationUrl}
        style={{ 
          backgroundColor: '#000', 
          color: 'white', 
          padding: '10px 30px', 
          textDecoration: 'none', 
          display: 'inline-block', 
          borderRadius: '20px', 
          fontWeight: 'bold' 
        }}
      >
        VERIFY
      </a>
    </div>
  );
};

export default EmailTemplateHealth;