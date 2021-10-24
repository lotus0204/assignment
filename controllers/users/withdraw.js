const User = require('../../User');
const { verifyAccess } = require('../../middleware/token');

module.exports = async (req, res) => {
  const userData = await verifyAccess(req, res);
  if (userData) {
    try {
      const { userId, email } = userData;
      await User.destroy({ where: { userId, email } });
      res.status(200).json({ message: 'Success: Withdraw' });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(401).json({ message: 'Fail: Withdraw' });
  }
};
