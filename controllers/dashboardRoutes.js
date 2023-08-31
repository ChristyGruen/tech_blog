const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    console.log(req.session)    
    console.log("session is logged above")

 // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll(
      {
        where: {
          userId: req.session.userId 
        },
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
    const blogs = blogData.map(blog => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      blogs,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/newpost', async (req, res) => {
  try {
    
    res.render('newpost', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//works but the title and content are truncated in the edit post form
router.get('/updatepost/:id', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findByPk(req.params.id, {
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

    res.render('updatepost', {
      blog,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
