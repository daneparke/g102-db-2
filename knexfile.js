module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/g102-stuff-yeah'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
