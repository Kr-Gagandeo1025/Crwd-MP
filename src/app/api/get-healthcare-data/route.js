import { NextResponse } from "next/server";
import getClient from "../../../util/db";

export async function POST(req) {
    if(req.method !== "POST"){
        return NextResponse.json({"message":"method not allowed","status":401})
    }
    const client = getClient();
    const {id} = await req.json();

    try {
        // Query healthcare data for the specific patient using `id`
        const healthcareDataQuery = `
          SELECT id, beneficiary_name, age, target_amount_eth, date_created
          FROM patient_data
          WHERE id = ${id};
        `;
        
        // Fetch patient data for the given ID
        const result = await client.query(healthcareDataQuery);
    
        // Check if data is found
        if (result.rows.length === 0) {
          return NextResponse.json({
            success: false,
            message: "No healthcare data found for the given ID",
          });
        }
    
        // Return the patient data
        return NextResponse.json({
          success: true,
          data: result.rows[0], // Return only the data for the specific patient
        });
        
      } catch (error) {
        console.error("Error fetching healthcare data:", error);
        return NextResponse.json({
          success: false,
          message: "Failed to fetch healthcare data",
          error: error.message,
        });
    }

}