import { NextResponse } from "next/server";
import getClient from "../../../util/db";

export async function POST() {
    const client = getClient();
    try {
        // Query data from beneficiary_data table
        const beneficiaryDataQuery = `
          SELECT id, beneficiary_name, target_amount_eth, date_created 
          FROM company_ngo_data;
        `;
        const data1 = (await client.query(beneficiaryDataQuery)).rows;
    
        // Query data from student_data table
        const studentDataQuery = `
        SELECT id, beneficiary_name, target_amount_eth, date_created 
        FROM student_data;
        `;
        const data2 = (await client.query(studentDataQuery)).rows;
        
        // Query data from patient_data table
        const patientDataQuery = `
          SELECT id, beneficiary_name, target_amount_eth, date_created 
          FROM patient_data;
        `;
        const data3 = (await client.query(patientDataQuery)).rows;
        
        // Return the datasets as separate fields in the response
        return NextResponse.json({
          success: true,
          data1, // Data from beneficiary_data table
          data2, // Data from patient_data table
          data3, // Data from student_data table
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch data', error: error.message });
      }
}