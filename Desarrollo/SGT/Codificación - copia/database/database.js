const mongoose = require('mongoose');

exports.connection = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('Conectado a la BD.')
}