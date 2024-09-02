import { NextResponse } from "next/server";
const client = require("../../../lib/db");

export async function GET() {
  try {
    const result = await client.query("SELECT * FROM USERS");
    console.log("Query result:", result.rows);
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err.stack);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST() {
  try {
    
  } catch {

  }
}