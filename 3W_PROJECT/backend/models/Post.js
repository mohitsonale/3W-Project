import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  username: String,
  text: String,
  image: String,
  likes: [String],   
  comments: [
    {
      username: String,
      text: String
    }
  ]
});

export default mongoose.model("Post", PostSchema);
