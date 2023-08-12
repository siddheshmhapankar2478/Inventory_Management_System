import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { uri } from '@/app/config';


const client = new MongoClient(uri);

export async function POST(request) {
  const { id } = await request.json();
  try {
    await client.connect();

    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const filter = { id: id }; // Assuming your MongoDB uses _id as the primary key

    const result = await inventory.deleteOne(filter);
    const responseBody = {
      success: true,
      message: `${result.deletedCount} document(s) deleted`,
    };
    return NextResponse.json(responseBody);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, message: 'Some error occurred' });
  } finally {
    await client.close();
  }
}
