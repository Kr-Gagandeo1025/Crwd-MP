import { NextResponse } from "next/server";
import getClient from "../../../util/db";

export async function POST(req) {
    const clinet = getClient();
    return NextResponse.json({'message':'Hello World','status':200});
}