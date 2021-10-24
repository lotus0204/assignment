const { verifyAccess } = require('../../middleware/token');
const Post = require('../../Post');

module.exports = async (req, res) => {
  const userData = await verifyAccess(req, res);
  const post_id = req.params.id;
  try {
    if (userData) {
      const findPost = await Post.findOne({
        where: {
          id: post_id,
          userId: userData.id
        }
      });
      if (!findPost) res.status(404).json({ idDel: false });
      await Post.destroy({ where: { id: post_id, userId: userData.id } });
      res.status(200).json({ isDel: true });
    }
  } catch (err) {
    console.log(err);
  }
};
