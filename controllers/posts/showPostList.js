const Post = require('../../Post');

module.exports = async (req, res) => {
  const num = req.params.num || 1;
  const offset = 4 * (num - 1);
  try {
    const pageData = await Post.findAndCountAll({
      offset: offset,
      limit: 4,
      order: [['createdAt', 'DESC']],
      attributes: ['userId', 'title', 'content', 'updatedAt', 'createdAt']
    });
    if (offset + 1 <= pageData.count) res.status(200).json({ data: pageData });
    res.status(404).json({ message: 'end' });
  } catch (err) {
    console.log(err);
  }
};
