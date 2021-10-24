const Post = require('../../Post');

module.exports = async (req, res) => {
  const post_id = req.params.id;
  try {
    const post = await Post.findByPk(post_id);
    if (!post) res.status(404).json({ data: null, message: "Post's not found" });
    const { userId, title, content } = post;
    res.status(200).json({ data: { userId, title, content } });
  } catch (err) {
    console.log(err);
  }
};
