const express = require('express');
const router = express.Router();
const { users, posts } = require('../controllers/index');

// Users Controller
router.put('/signup', users.signup);
router.post('/login', users.login);
router.get('/logout', users.logout);
router.delete('/withdraw', users.withdarw);

// Posts Controller
router.put('/createPost', posts.createPost);
router.delete('/deletePost/:id', posts.deletePost);
router.get('/showPost/:id', posts.showPost);
router.get('/showPostList/page/:num', posts.showPostList);
router.patch('/updatePost/:id', posts.updatePost);

module.exports = router;
