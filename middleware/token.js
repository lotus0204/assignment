const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  generateAccess: (payload) => jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: '1d' }),
  generateRefresh: (payload) => jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: '7d' }),
  verifyAccess: async (req, res) => {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) res.status(401).json({ message: 'token not found' });
    try {
      const userData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
      return userData;
    } catch (err) {
      res.status(400).json({ message: 'token expired' });
      return null;
    }
  }
};
