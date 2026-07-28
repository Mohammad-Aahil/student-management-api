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

    const students = await studentsCollection
      .find()
      .sort({
        age: -1,
      })
      .toArray();
    console.log(students);

    // const cursor = studentsCollection.find();

    // const students = await studentsCollection
    //   .find({
    //     department: {
    //       $in: ["BCom"],
    //     },
    //   })
    //   .toArray();
    // for all students .find().toArray();
    // for departments .find({
    //   $or: [{ department: "BCA" }, { department: "BCom" }],
    // })
    // .toArray();
    // console.log(students);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

/*
1. .find({
  age: {
    $gte: 21,
  }
}).toArray() // -> follow every condition , assume as I added this..

2.  .find({
  department: {
    $ne: 'BCom',
  }
})

3.  .find({
  age: {
    $gt: 20,
  },
  department: {
    $nin: ["BCA" , "BSc"]
  }
})

4.  .find({
  age: {
  $gte: 20
  },
  department: {
    $in: ["BCA", "BSc"]
  },
})

*/
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
