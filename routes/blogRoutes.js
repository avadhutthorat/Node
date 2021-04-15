const express = require('express');
const blogcontroller = require('../controllers/blogController');
const Blog = require('../models/blog');

const router = express.Router()

router.get('/', blogcontroller.getAllBlogs);

router.post('/', blogcontroller.postBlog);

router.get('/create', blogcontroller.createPost);

router.get('/:id', blogcontroller.getIndividualBlog)

router.delete('/:id', blogcontroller.deleteBlog);

module.exports = router