module.exports = {
  PORT: process.env.PORT || 3333,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    'mongodb://devserver:devserver@ds042607.mlab.com:42607/jwt-auth-todo-db'
};
