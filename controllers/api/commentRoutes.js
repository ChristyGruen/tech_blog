const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      // https://sentry.io/answers/react-spread-operator-three-dots/#:~:text=These%20three%20dots%20are%20called,or%20object%20into%20separate%20variables.
      ...req.body,
      userId: req.session.userId,
    });
    console.log(commentData)
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;
