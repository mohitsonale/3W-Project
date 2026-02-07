import express from "express";
import Post from "../models/Post.js";

const router = express.Router();


router.post("/create", async (req, res) => {
  const { username, text, image } = req.body;
  
  const post = new Post({
    username,
    text,
    image,
    likes: [],  
    comments: []
  });

  await post.save();
  res.json({ success: true, message: "Post created" });
});


router.get("/feed", async (req, res) => {
  const posts = await Post.find().sort({ _id: -1 });
  res.json(posts);
});


router.post("/like/:id", async (req, res) => {
  const { username } = req.body;
  const post = await Post.findById(req.params.id);

  if (!post.likes.includes(username)) {
    post.likes.push(username);
  }

  await post.save();
  res.json({ success: true });
});


router.post("/comment/:id", async (req, res) => {
  const { username, text } = req.body;
  const post = await Post.findById(req.params.id);

  post.comments.push({ username, text });
  await post.save();

  res.json({ success: true });
});



router.delete("/delete-post/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    res.json({ success: true, message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


export default router;
