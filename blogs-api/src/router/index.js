const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoriesRouter = require('./categoriesRouter');
const blogPost = require('./blogPostRouter');
const auth = require('./authRouter');

module.exports = { userRouter, loginRouter, categoriesRouter, blogPost, auth };
