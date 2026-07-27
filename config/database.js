import { MongoClient } from "mongodb";

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri);

    await client.connect();

    console.log("✅ Connected to MongoDB");

    // Select database
    const db = client.db(process.env.DB_NAME);

    // Select collection
    const studentsCollection = db.collection("students");

    // Insert one document
    const result = await studentsCollection.insertOne({
      name: "Aahil",
      age: 21,
      department: "BCA",
    });

    console.log("Inserted ID:", result.insertedId);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// import { MongoClient } from "mongodb";

// export async function connectDB() {
//   const uri = process.env.MONGODB_URI;
//   console.log(process.env.MONGODB_URI);

//   const client = new MongoClient(uri);
//   try {
//     await client.connect();

//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ Failed to connect to MongoDB");
//     console.error(error);

//     process.exit(1);
//   }
// }
