const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      // https://sentry.io/answers/react-spread-operator-three-dots/#:~:text=These%20three%20dots%20are%20called,or%20object%20into%20separate%20variables.
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
