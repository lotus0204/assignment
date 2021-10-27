const User = require('../../User');
const { generateAccess, generateRefresh } = require('../../middleware/token');
const { comparePassword } = require('../../middleware/crypto');

module.exports = async (req, res) => {
  const { userId, password } = req.body;
  const userData = await User.findOne({ where: { userId } });
  if (!userData) res.status(404).json({ isLogin: false, message: 'user not found' });
  if (!comparePassword(password, userData.password)) res.status(400).json({ isLogin: false, message: 'wrong password' });
  const { id, email } = userData;
  const accessToken = generateAccess({ id, userId, email });
  const refreshToken = generateRefresh({ id, userId, email });
  const expireDate = new Date(Date.now() + 60 * 60 * 1000 * 24);

  res.cookie('accessToken', accessToken, { httpOnly: true, expires: expireDate, sameSite: 'none', secure: true })
    .cookie('refreshToken', refreshToken, { httpOnly: true, expires: expireDate, sameSite: 'none', secure: true })
    .status(200).json({ data: { userId, email }, isLogin: true });
};
