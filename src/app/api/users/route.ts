import { NextResponse } from "next/server";

const client = require("../../../lib/db");

export async function GET(req:Request) {
  try {
    console.log('GET request received')
    const { searchParams } = new URL(req.url as string);
    const useremail = searchParams.get('useremail');
    const q = `SELECT * FROM USERS WHERE useremail = $1;`;
    const result = await client.query(q, [useremail]);
    if(!result.rows[0]){
      console.log("no user found")
      return NextResponse.json({message: "no user found"})
    } return NextResponse.json(result.rows[0], { status: 200 });
  } catch (err) {
    console.error("Error fetching users:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req:Request) {
  try {
    console.log('POST request received');
    const body =  await req.json();
    console.log('body:', body);
    const { userid, useremail, password } = body;
    console.log('userid:', userid, 'useremail:', useremail, 'password:', password);
    const values = [userid, useremail, password];
    const q = `
    INSERT INTO users(userid, useremail, password)
    VALUES($1, $2, $3)
    RETURNING *
    `;
    const result = await client.query(q, values);
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error(`Error inserting user record. Error: ${err}`);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req:Request) {
  try{
    console.log('DELETE request received');
    const body =  await req.json();
    const { useremail } = body;
    const values = [useremail]
    const q = `
    DELETE FROM users
    WHERE useremail = $1
    RETURNING *
    `;
    const result = await client.query(q, values);
    if(!result.rows[0]){
      return NextResponse.json({message: "User not found."}, { status: 404 })
    }
    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (err){
    console.error(`Error deleting user record. Error: ${err}`);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}