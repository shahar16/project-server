const mongoose = require('mongoose')
const app = require('../app')

const sPort = process.env.PORT || 8080

const mongoAtlasUri =
        'mongodb+srv://' +
        process.env.MONGO_USER +
        ':' +
        process.env.MONGO_PASSWORD +
        '@projects-ple4w.mongodb.net/' +
        process.env.MONGO_DEFULT_DB +
        '?retryWrites=true&w=majority'

mongoose
  .connect(mongoAtlasUri)
  .then(() => {
    console.log('Connected to DB successfuly')
    app.listen(sPort, function () {
      console.log('Server running on port ' + sPort)
    })
  })
  .catch((err) => {
    console.log(mongoAtlasUri)
    console.log('Error while trying to connect DB')
  })
