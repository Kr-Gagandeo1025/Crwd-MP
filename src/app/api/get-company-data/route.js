import { NextResponse } from "next/server";
import getClient from "../../../util/db";

export async function POST(req) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Method not allowed", status: 401 });
    }

    const client = getClient();
    const { id } = await req.json();

    try {
        // Use a parameterized query to prevent SQL injection
        const companyVerificationQuery = `
            SELECT 
                bank_statement_link, 
                beneficiary_name, 
                cin, 
                date_of_incorporation, 
                cin_doc_link, 
                entity_type, 
                gstin, 
                pan_number, 
                target_amount_eth, 
                tin, 
                utility_bill_link
            FROM company_ngo_data
            WHERE id = $1;
        `;

        const result = await client.query(companyVerificationQuery, [id]);

        if (result.rows.length === 0) {
            return NextResponse.json({
                success: false,
                message: "No company found for the given ID",
            });
        }

        return NextResponse.json({
            success: true,
            data: result.rows[0],
        });
    } catch (error) {
        console.error("Error fetching company data:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch company data",
            error: error.message,
        });
    }
}
