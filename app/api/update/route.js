import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { uri } from '@/app/config';
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    await client.connect();
    const { action,id, productName, initialQuantity } = await request.json();

    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const filter = { productName: productName };

    let newQuantity = action === 'increase' ? parseInt(initialQuantity) + 1 : parseInt(initialQuantity) - 1;
    const updateDoc = {
      $set: {
        quantity: newQuantity,
      }
    };
    const prod = await inventory.find(filter).toArray();

    const result = await inventory.updateOne(filter, updateDoc);
    const responseBody = {
      success: true,
      message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    };
    return NextResponse.json(responseBody);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, message: 'Some error occurred' });
  } finally {
    await client.close();
  }
}
