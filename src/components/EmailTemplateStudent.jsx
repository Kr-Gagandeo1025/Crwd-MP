const EmailTemplateStudent= ({ studentName, rollNUmber, phoneNumber, fatherName, courseDuration, admissionLetterUrl, verificationUrl }) => {
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
          This email contains details of a student from your institution for crowdfunding. Please go through the below mentioned details and click on the Verify Button, which will take you to a verification portal.
        </p>
        <div style={{ textAlign: 'left', margin: '20px 0' }}>
          <p><strong>Name:</strong> {studentName}</p>
          <p><strong>Institute Roll Number:</strong> {rollNUmber}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Father Name:</strong> {fatherName}</p>
          <p><strong>Course Duration:</strong> {courseDuration}</p>
          <p><strong>Addmission Letter:</strong> <a href={admissionLetterUrl} style={{ color: '#007BFF' }}>View Document</a></p>
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
  
  export default EmailTemplateStudent;