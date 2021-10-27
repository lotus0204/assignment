const { verifyAccess } = require('../../middleware/token');
const Post = require('../../Post');

module.exports = async (req, res) => {
  const userData = await verifyAccess(req, res);
  const { title, content } = req.body;
  const { id } = userData
  try {
    await Post.create({
      userId: id,
      title,
      content
    });
    res.status(200).json({ data: { id, title, content }, message: 'Post created' });
  } catch (err) {
    console.log(err);
  }
};
