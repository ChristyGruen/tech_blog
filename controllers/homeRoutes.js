const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(req.session.logged_in)
    console.log(req.session.username)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs,
      username: req.session.username,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comment/:id', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findByPk(req.params.id,{
      include: [
        {
          model: User,
          attributes: [
            'id',
            'username'
          ],
        },
      ],
    });

    // Serialize data so the template can read it
    const blog = blogData.get({ plain: true });
    console.log(blog)
    // Pass serialized data and session flag into template
    res.render('commentpost', { 
      blog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
//signup route
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
