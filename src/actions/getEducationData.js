'use server'
import getClient from "../util/db";
export default async function getHealthcareData(id){
    const client = getClient();
    try {
        // Query healthcare data for the specific patient using `id`
        const studentDataQuery = `
          SELECT id,
                 address,
                 beneficiary_name,
                 identity_proof_link,
                 enrollment_status,
                 institute_roll_number,
                 admission_letter_link,
                 target_amount_eth,
                 phone_number
            FROM student_data
          WHERE id = ${id};
        `;
        
        // Fetch student data for the given ID
        const result = await client.query(studentDataQuery);
    
        // Check if data is found
        if (result.rows.length === 0) {
            return{
            success: false,
            message: "No student data found for the given ID",
            };
        }
    
        // Return the patient data
        return {
            success: true,
            data: result.rows[0], // Return only the data for the specific patient
        };
        
        } catch (error) {
        console.error("Error fetching student data:", error);
        return {
            success: false,
            message: "Failed to fetch student data",
            error: error.message,
        };
    }
}