import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.prams.id) });
  console.log(result);

  await db
    .collection("post")
    .updateOne(
      { 수정할게시물정보 },
      { $set: { title: "바보", content: "바보2" } }
    );

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
