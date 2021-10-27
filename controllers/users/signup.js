const User = require('../../User');
const { generatePassword } = require('../../middleware/crypto');

module.exports = async (req, res) => {
  const { userId, email, password } = req.body;
  try {
    if (!userId || !email || !password) res.status(400).json({ isSignup: false });
    const userInfo = await User.findOne({
      where: { userId }
    });
    if (userInfo) res.status(400).json({ isSignup: false });
    else {
      const newPassword = generatePassword(password);
      await User.create({
        userId,
        email,
        password: newPassword
      });
      res.status(200).json({ isSignup: true });
    }
  } catch (err) {
    console.log(err);
  }
};
