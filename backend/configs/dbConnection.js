const mongoose = require('mongoose');

const connetDB = mongoose.connect(process.env.CONN_STR + '/test')
  .then(() => console.log('Connected!'))
  .catch((e)=>{
    console.log('Database no conected', e)
  });

module.exports = connetDB;