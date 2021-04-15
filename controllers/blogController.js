const Blog = require('../models/blog');

const getAllBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(blogs => {
            res.render('index', {title: 'All Blogs', blogs})
        })
        .catch(err => console.log(err))
}

const createPost = (req,res)=>{
    res.render('create',{title:'Create Blog'})
};

const postBlog = (req,res) => {
    const { input, snippet, body} = req.body;
    const blog = new Blog(req.body);
    blog.save()
        .then(() =>res.redirect('/blogs'))
        .catch(err => console.log(err))
}

//get blog details
const getIndividualBlog = (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.render('details',{title: 'blog',blog}))
        .catch(err => console.log(err))
}

// delete blog
const deleteBlog = (req, res) =>{
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({
            redirect: '/blogs'
        }) )
        .catch(err => console.log(err))
};

module.exports = {
    getAllBlogs,
    createPost,
    postBlog,
    getIndividualBlog,
    deleteBlog
}