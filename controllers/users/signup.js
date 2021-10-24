const User = require('../../User');

module.exports = async (req, res) => {
  const { userId, email, password } = req.body;
  try {
    if (!userId || !email || !password) res.status(400).json({ isSignup: false });
    const userInfo = await User.findOne({
      where: { userId }
    });
    if (userInfo) res.status(400).json({ isSignup: false });
    await User.create({
      userId,
      email,
      password
    });
    res.status(201).json({ isSignup: true });
  } catch (err) {
    console.log(err);
  }
};
