module.exports = (req, res) => {
  res.status(200)
    .clearCookie('refreshToken')
    .clearCookie('accessToken')
    .json({ isLogout: true });
};
