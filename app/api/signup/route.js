import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// Initialize MongoDB client
const client = new MongoClient(process.env.MONGODB_URL);

let db;
let usersCollection;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db('video-downloader'); 
    usersCollection = db.collection('users');
  }
}

// API Route handler
export async function POST(request) {
  try {
    await connectToDatabase();

    const { name, email, password } = await request.json();

    // console.log("Request JSON body:", { name, email, password });


    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Please fill in all fields' }, { status: 400 });
    }

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { name, email, password: hashedPassword };
    await usersCollection.insertOne(user);

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
