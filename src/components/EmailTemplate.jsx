const EmailTemplate = ({name, message, verificationUrl}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Hello {name},</h2>
      <p>{message}</p>
      <a href={verificationUrl} 
         style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', textDecoration: 'none', display: 'inline-block', borderRadius: '5px' }}>
        Verify Now
      </a>
    </div>
  );
}

export default EmailTemplate
