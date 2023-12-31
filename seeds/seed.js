const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData);

  const blog = await Blog.bulkCreate(blogData);

  const comment = await Comment.bulkCreate(commentData);
  
  process.exit(0);
};

seedDatabase();
