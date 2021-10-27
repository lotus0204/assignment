const { verifyAccess } = require('../../middleware/token');
const Post = require('../../Post');

module.exports = async (req, res) => {
  const userData = await verifyAccess(req, res);
  const post_id = req.params.id;
  const { title, content } = req.body;
  try {
    if (userData) {
      const findPost = await Post.findOne({
        where: {
          id: post_id,
          userId: userData.id
        }
      });
      if (!findPost) res.status(404).json({ isFixed: false });
      await Post.update(
        {
          title: title || findPost.title,
          content: content || findPost.content,
          updatedAt: new Date()
        },
        {
          where: {
            id: post_id,
            userId: userData.id
          }
        }
      );
      res.status(200).json({ isFixed: true, data: { title:title||findPost.title, content: content || findPost.content } });
    }
  } catch (err) {
    console.log(err);
  }
};
