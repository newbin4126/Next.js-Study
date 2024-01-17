import { connectDB } from "@/util/database.js";
import { MongoClient } from "mongodb";

export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  // await fetch('/URL',{next : { revalidate : 60}})

  return <div>안녕</div>;
}
