'use server'
import getClient from "../util/db";
export default async function getHealthcareData(id){
    const client = getClient();
    try {
        // Query healthcare data for the specific patient using `id`
        const healthcareDataQuery = `
            SELECT id, beneficiary_name, age, target_amount_eth, disease, patient_status, hospital_name, hospital_estimation_letter_link, medical_bill_link, medical_reports_link
            FROM patient_data
            WHERE id = ${id};
        `;
        
        // Fetch patient data for the given ID
        const result = await client.query(healthcareDataQuery);
    
        // Check if data is found
        if (result.rows.length === 0) {
            return{
            success: false,
            message: "No healthcare data found for the given ID",
            };
        }
    
        // Return the patient data
        return {
            success: true,
            data: result.rows[0], // Return only the data for the specific patient
        };
        
        } catch (error) {
        console.error("Error fetching healthcare data:", error);
        return {
            success: false,
            message: "Failed to fetch healthcare data",
            error: error.message,
        };
    }
}