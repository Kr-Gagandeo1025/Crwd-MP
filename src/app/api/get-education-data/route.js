import { NextResponse } from "next/server";
import getClient from "../../../util/db";

export async function POST(req) {
    if(req.method !== "POST"){
        return NextResponse.json({"message":"method not allowed","status":401})
    }
    const client = getClient();
    const { id } = await req.json();

    try {
        // Query student data for the specific ID
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
            return NextResponse.json({
                success: false,
                message: "No student data found for the given ID",
            });
        }
    
        // Return the student data
        return NextResponse.json({
            success: true,
            data: result.rows[0], // Return the student data for the given ID
        });
        
    } catch (error) {
        console.error("Error fetching student data:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch student data",
            error: error.message,
        });
    }
}
