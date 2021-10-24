const { verifyAccess } = require('../../middleware/token');
const Post = require('../../Post');

module.exports = async (req, res) => {
  const userData = await verifyAccess(req, res);
  const { title, content } = req.body;
  try {
    await Post.create({
      userId: userData.id,
      title,
      content
    });
    res.status(200).json({ data: userData.id, title, content, message: 'Post created' });
  } catch (err) {
    console.log(err);
  }
};
