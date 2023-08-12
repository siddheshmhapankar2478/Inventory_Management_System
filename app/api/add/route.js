const { MongoClient, ServerApiVersion } = require('mongodb');
import { NextResponse } from "next/server";
import { uri } from '@/app/config';

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
export async function GET(request) {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');

        // Send a ping to confirm a successful connection
        await database.command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB! GET request");

        // Query for a movie that has the title 'Back to the Future'
        const query = {  };
        const allProducts = await inventory.find(query).toArray();
        return NextResponse.json({success:true,allProducts});
    } 
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export async function POST(request) {
    let body=await request.json();

    try {
        await client.connect();
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        // Send a ping to confirm a successful connection
        await database.command({ ping: 2 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB! POST request");

        // Query for a movie that has the title 'Back to the Future'
        const product = await inventory.insertOne(body);
        return NextResponse.json({product,ok:true});
    } 
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}








