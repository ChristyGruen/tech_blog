const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId
    console.log(userId)

    // incomplete!! filter blogs by user !!  req.session.userId isn't working anymore!!!


    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll(
      {
        where: { userId: 2
          // req.session.userId 
        }
      },
      {
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
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      blogs, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/newpost', async (req, res) => {
  try {
    // // Get all blogs and JOIN with user data
    // const blogData = await Blog.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: [
    //         'id',
    //         'username'
    //       ],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('newpost', { 
      // blogs, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//works but the title and content are truncated in the edit post form
router.get('/updatepost/:id', async (req, res) => {
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
    res.render('updatepost', { 
      blog, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// //I don't think that dashboard itself needs any api routes
// //just lists all of the users posts and has links to the newpost and editpost pages 

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       // https://sentry.io/answers/react-spread-operator-three-dots/#:~:text=These%20three%20dots%20are%20called,or%20object%20into%20separate%20variables.
//       ...req.body,
//       userId: req.session.userId,
//     });

//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         userId: req.session.userId,
//       },
//     });

//     if (!blogData) {
//       res.status(404).json({ message: 'No Blog found with this id!' });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
